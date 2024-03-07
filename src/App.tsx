import { useState, useEffect } from "react";

import axios, { isAxiosError } from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import configData from "../config/config.json";

import { string_or_null, date_or_null, AuxDataRecordType, MongoReturnType, MongoRecordType, MongoData} from './components/interfaces'
import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

export const App = () => {
  const [startDateTime, setStartDateTime] = useState<date_or_null>(new Date());
  const [endDateTime, setEndDateTime] = useState<date_or_null>(null);

  const [bucket, setBucket] = useState<number|null>(0);
  const [item, setItem] = useState<string_or_null>(null);
  const [email, setEmail] = useState<string_or_null>(null);
  const [complete, setComplete] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [needreset, setNeedreset] = useState<boolean>(false);
  const [mongodata, setMongodata] = useState<MongoData[]>([]);
  const [auxdata, setAuxdata] = useState<AuxDataRecordType[]>([]);
  
  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  const get_api_url = () : string => {
    let service_prefix_host = "";
    if (import.meta.env.service_prefix_host_name !== undefined) {
      service_prefix_host = import.meta.env.service_prefix_host_name
    }

    let service_prefix_port = "";
    if (import.meta.env.service_prefix_port_name !== undefined) {
      service_prefix_port = import.meta.env.service_prefix_port_name;
    }

    let vite_api_ip = "";
    if (import.meta.env.VITE_API_IP !== undefined) {
      vite_api_ip = import.meta.env.VITE_API_IP;
      console.log(`vite_api_ip set to ${import.meta.env.VITE_API_IP}`);
    }

    let vite_api_port = "";
    if (import.meta.env.VITE_API_PORT !== undefined) {
      vite_api_port = import.meta.env.VITE_API_PORT;
      console.log(`vite_api_port set to ${import.meta.env.VITE_API_PORT}`);
    }

    let config_api_ip = "";
    if (configData.API_IP !== undefined) {
      config_api_ip = configData.API_IP;
    }

    let config_api_port = "";
    if (configData.APIPORT !== undefined) {
      config_api_port = configData.APIPORT;
    }

    const api_ip = service_prefix_host || vite_api_ip || config_api_ip || 'localhost';
    const api_port = service_prefix_port || vite_api_port || config_api_port || "80";

    const api_url = `https://${api_ip}:${api_port}/api/`;

    return api_url
  }

  useEffect(() => {
    const build_mongo_data = (data: MongoReturnType): MongoData[] => {
      if (data.data && data.data.length) {
        return data.data.map((x: MongoRecordType) => {return {"booking_start": x.booking_start, "booking_end": x.booking_end, "bucket": x.bucket, [item_name]: x[item_name]}})
      } else {
        return [];
      }
    }

    const api_url = get_api_url();

    const get_mongo_data = async () => {
      try {
        const item_name = import.meta.env.VITE_TYPE || configData.ITEM_NAME;

        const ITEMS_url = api_url + 'all_' + item_name + 's/';
        console.log(`MAIN ITEMS_url is ${ITEMS_url}`);

        await axios.get<MongoReturnType>(ITEMS_url, {headers: {'Content-Type': 'application/json'}}).then(response => {
            const mymongodata: MongoData[] = build_mongo_data(response.data);
            setMongodata(mymongodata);
          }
        )
      } catch (error: unknown | AxiosError) {
        if (isAxiosError(error)) {
          if (error.response) {
            // The client was given an error response (5xx, 4xx)
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Axios Error Response');
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Anything else
            console.log('Axios Error', error.message);
          }
        } else {
          // Anything else
          console.log('Non Axios Error');
          console.log(error);
        }
      }
    };
    get_mongo_data();
  }, []);

  const reset = (): void =>
  {
    setNeedreset(false);
    setStartDateTime(new Date());
    setEndDateTime(null);
    setBucket(0);
    setItem(null);
    setEmail(null);
    setAuxdata([]);
    setComplete(false);
    setConfirmed(false);
  }

  if (needreset) {reset()}

  if (endDateTime && item && email && complete) {
    return (
      <>
      <Header />
      <ProcessData
        config={configData}
        mongo_data={mongodata} set_mongodata={setMongodata}
        booking_start={startDateTime} set_booking_start={setStartDateTime}
        booking_end={endDateTime} set_booking_end={setEndDateTime}
        bucket={bucket} set_bucket={setBucket}
        item={item} set_item={setItem}
        email={email} set_email={setEmail}
        auxdata={auxdata} set_auxdata={setAuxdata}
        set_complete={setComplete}
        url={api_url}
        confirmed={confirmed} set_confirmed={setConfirmed}
        set_needreset={setNeedreset}
      />
      </>
    );
  } else {
    return (
      <>
      <Header />
      <InputForm
        config={configData}
        mongo_data={mongodata}
        booking_start={startDateTime} set_booking_start={setStartDateTime}
        booking_end={endDateTime} set_booking_end={setEndDateTime}
        bucket={bucket} set_bucket={setBucket}
        set_item={setItem}
        email={email} set_email={setEmail}
        auxdata={auxdata} set_auxdata={setAuxdata}
        set_complete={setComplete}
      />
      </>
    );
  }
}

export default App

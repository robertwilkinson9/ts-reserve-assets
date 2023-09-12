import { useState, useEffect } from "react";

import axios, { AxiosError, isAxiosError } from 'axios'

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

  var beserver = "localhost";
  if (('API_IP' in configData) && (typeof configData.API_IP === "string")) {
    beserver = configData.API_IP;
  }
  const API_url = `https://${beserver}:${configData.APIPORT}/api/`;

  const build_mongo_data = (data: MongoReturnType): MongoData[] => {
    console.log("build_mongo_data data is ");
    console.log(data);
    console.log("build_mongo_data data.data is ");
    console.log(data.data);
    if (data.data && data.data.length) {
      return data.data.map((x: MongoRecordType) => {return {"booking_start": x.booking_start, "booking_end": x.booking_end, "bucket": x.bucket, [configData.ITEM_NAME]: x[configData.ITEM_NAME]}})
    } else {
      return [];
    }
  }

  const get_mongo_data = async () => {
    const ITEMS_url = API_url + 'all_' + configData.ITEM_NAME + 's/';
    console.log(`ITEMS_url is ${ITEMS_url}`);
    try {
      await axios.get<MongoReturnType>(ITEMS_url).then(response => {
        console.log(`GET RESPONSE is`);
        console.log(response);
        const mymongodata: MongoData[] = build_mongo_data(response.data);

        console.log("MYMONGODATA");
        console.log(mymongodata);
        setMongodata(mymongodata);
      }
      )
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        if (error.response) {
          // The client was given an error response (5xx, 4xx)
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
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

  useEffect(() => {
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
        url={API_url}
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

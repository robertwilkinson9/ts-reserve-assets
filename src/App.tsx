import { useState, useEffect } from "react";

import axios, { isAxiosError } from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import configData from "../config/config.json";

import { string_or_null, date_or_null, AuxDataRecordType, MongoRecordType, MongoData} from './components/interfaces'
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

  const API_url = `http://localhost:${configData.APIPORT}/api/`;

  const get_mongo_data = async () => {
    const ITEMS_url = API_url + 'all_' + configData.ITEM_NAME + 's/';
    try {
      const response = await axios.get(ITEMS_url);

      if (response) {
        console.log("RESPONSE.DATA.DATA")
        console.log(response.data.data)
        const mymongodata = response.data.data.map((x: MongoRecordType) => {return {"booking_start": x.booking_start, "booking_end": x.booking_end, "bucket": x.bucket, [configData.ITEM_NAME]: x[configData.ITEM_NAME]}})
        console.log("MYMONGODATA");
        console.log(mymongodata);
        setMongodata(mymongodata);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          // The client was given an error response (5xx, 4xx)
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The client never received a response, and the request was never left
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser 
          // and an instance of http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Anything else
          console.log('Error', error.message);
        }
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

  if (needreset) {
    reset();
  }

  console.log(`0. EDT is ${endDateTime} ITEM is ${item} EMAIL is ${email} and COMPLETE is ${complete}`);
  if (endDateTime && item && email && complete) {
   console.log(`1. EDT is ${endDateTime} ITEM is ${item} EMAIL is ${email} and COMPLETE is ${complete}`);
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

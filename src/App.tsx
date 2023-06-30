import { useState, useEffect } from "react";

import axios from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import configData from "./config.json";

import { string_or_null, date_or_null, MongoRecordType, MongoData} from './components/interfaces'
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

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  const API_url = `http://localhost:${configData.APIPORT}/api/`;

  const get_mongo_data = async () => {
    // Change this endpoint to whatever local or online address you have
    const ITEMS_url = API_url + 'items/';

    const response = await axios.get(ITEMS_url);

    let mymongodata = response.data.data.map((x: MongoRecordType) => {return {"booking_start": x.booking_start, "booking_end": x.booking_end, "bucket": x.bucket, "item": x.item}})
    setMongodata(mymongodata);
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
    setComplete(false);
    setConfirmed(false);
  }

  if (needreset) {
    reset();
  }

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
        set_complete={setComplete}
      />
      </>
    );
  }
}

export default App

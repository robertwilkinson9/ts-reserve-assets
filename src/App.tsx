import { useState, useEffect } from "react";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import configData from "../config/config.json";

import { string_or_null, date_or_null, AuxDataRecordType, MongoData} from './components/interfaces'
import { get_api_url } from './components/get_api_url'
import { get_mongo_data } from './components/get_mongo_data'
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

  const item_name = import.meta.env.VITE_TYPE || configData.ITEM_NAME;
  const api_url = get_api_url(configData);

  useEffect(() => {
    get_mongo_data(api_url, item_name, setMongodata);
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

import { useState, useEffect } from "react";

import axios from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import configData from "./config.json";

import { MongoType, MongoRecordType, MongoData} from './components/interfaces'
import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

type string_or_null = string | null;
type date_or_null = Date | null;

export const App = () => {
  const [startDateTime, setStartDateTime] = useState<date_or_null>(new Date());
  const [endDateTime, setEndDateTime] = useState<date_or_null>(null);

  const [bucket, setBucket] = useState<number|null>(0);
  const [item, setItem] = useState<string_or_null>(null);
  const [email, setEmail] = useState<string_or_null>(null);
  const [complete, setComplete] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [needreset, setNeedreset] = useState<boolean>(false);
  const [mongoitems, setMongoitems] = useState<MongoType>({"success": false});
  const [mongodata, setMongodata] = useState<MongoData[]>([]);

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  console.log("APP STARTED");

  const API_url = 'http://localhost:5179/api/';

  const get_data_from_items = (mongoitems: MongoType) => {
    let mongo_data: MongoRecordType[] = [];
    if (mongoitems && mongoitems.data) {
      mongo_data = mongoitems.data;
    }

    return mongo_data;
  }

  const get_mongoitems = async () => {
    // Change this endpoint to whatever local or online address you have
    const ITEMS_url = API_url + 'items/';

    const response = await axios.get(ITEMS_url);
    console.log("IN get_mongoitems and RESPONSE.DATA is ", JSON.stringify(response.data));

    const mongo_data = get_data_from_items(mongoitems);
    console.log("IN get_mongoitems and RESPONSE.DATA.DATA length is ", response.data.data.length, " AND MONGO_DATA.LENGTH is ", mongo_data.length);
    setMongoitems(response.data);

    let mymongodata = response.data.data.map((x: MongoRecordType) => {return {"booking_start": x.booking_start, "booking_end": x.booking_end, "bucket": x.bucket, "item": x.item}})
    console.log("MYMONGO_DATA is ");
    console.log(mymongodata);
    setMongodata(mymongodata);
  };

  useEffect(() => {
    get_mongoitems();
  }, []);

/*
    setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
    setEndDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
    setBucket: React.Dispatch<React.SetStateAction<number|null>>,
    setItem: React.Dispatch<React.SetStateAction<string|null>>,
    setEmail: React.Dispatch<React.SetStateAction<string|null>>,
    setComplete: React.Dispatch<React.SetStateAction<boolean>>,
*/

  const reset = (): void =>
  {
    console.log("RESET invoked");
    setNeedreset(false);
    setStartDateTime(new Date());
    setEndDateTime(null);
    setBucket(0);
    setItem(null);
    setEmail(null);
    setComplete(false);
    setConfirmed(false);
  }

//  console.log("AFTER useEffect App and COMPLETE is ",complete," and ITEMS are ", JSON.stringify(mongoitems) ," and MONGODATA are ", JSON.stringify(mongodata));

  console.log(`APP - BEFORE BRANCH and EDT is ${endDateTime} and ITEM is ${item} and EMAIL is ${email} AND COMPLETE IS ${complete} AND CONFIRMED IS ${confirmed}`);

//  if ((needreset) || (complete && confirmed)) {
  if (needreset) {
    console.log(`1. BEFORE RESET NEEDRESET IS ${needreset} COMPLETE IS ${complete} AND CONFIRMED IS ${confirmed}`);
    reset();
  }

//  if (endDateTime && item && email) {
  if (endDateTime && item && email && complete) {
//  if (endDateTime && item && email && complete && confirmed) { // XXX tautology?
    console.log(`APP - PD BRANCH and EDT is ${endDateTime} and ITEM is ${item} and EMAIL is ${email} AND COMPLETE IS ${complete} AND CONFIRMED IS ${confirmed}`);
    return (
      <>
      <Header />
      <ProcessData config={configData} mongo_data={mongodata} start={startDateTime} sdt={setStartDateTime} end={endDateTime} edt={setEndDateTime} bucket={bucket} sb={setBucket} item={item} si={setItem} email={email} se={setEmail} complete={complete} setcomplete={setComplete} url={API_url} confirmed={confirmed} set_confirmed={setConfirmed} setmongodata={setMongodata} setneedreset={setNeedreset} />
      </>
    );
  } else {
    console.log(`APP - NON PD BRANCH and EDT is ${endDateTime} and ITEM is ${item} and EMAIL is ${email} AND COMPLETE IS ${complete} AND CONFIRMED IS ${confirmed}`);
{ /*
    if (complete && confirmed) {
      console.log(`2. BEFORE RESET NEEDRESET IS ${needreset} COMPLETE IS ${complete} AND CONFIRMED IS ${confirmed}`);
      reset();
    }
*/ }
    return (
      <>
      <Header />
      <InputForm config={configData} mongoitems={mongodata} start={startDateTime} startdatesetter={setStartDateTime} end={endDateTime} enddatesetter={setEndDateTime} bucket={bucket} bucketsetter={setBucket} itemsetter={setItem} email={email} emailsetter={setEmail} complete={complete} completesetter={setComplete} />
      </>
    );
  }
}

export default App

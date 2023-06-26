import { useState, useEffect } from "react";

import axios from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import configData from "./config.json";

import { MongoType, MongoRecordType } from './components/interfaces'
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
  const [datasent, setDatasent] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [mongoitems, setMongoitems] = useState<MongoType>({"success": false});

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

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
//    console.log("IN get_mongoitems and RESPONSE.DATA is ", JSON.stringify(response.data));

    const mongo_data = get_data_from_items(mongoitems);
//    console.log("IN get_mongoitems and RESPONSE.DATA.DATA length is ", response.data.data.length, " AND MONGO_DATA.LENGTH is ", mongo_data.length, "AND DATASENT is ", datasent);

//    if ((datasent || mongo_data.length == 0) && (response.data.data.length > mongo_data.length)) {
      console.log("SETTING MONGO ITEMS DATSENT is ", datasent, "MONGO_DATA.LENGTH is ",mongo_data.length, " and RESPONSE.DATA.DATA is ", response.data.data.length);
      setMongoitems(response.data);
//    }
  };

  useEffect(() => {
    get_mongoitems();
  }, [complete, datasent]);
//  }, [complete, datasent, endDateTime]);

//  console.log("AFTER useEffect App and COMPLETE is ",complete," and DATASENT is ",datasent," and ITEMS are ", JSON.stringify(mongoitems));
//  console.log(`endDateTime IS ${endDateTime}, item IS ${item} and email IS ${email}`)

    const mongo_data = get_data_from_items(mongoitems);

  if (endDateTime && item && email && complete) {
//  if (endDateTime && item && email && complete && confirmed) { // XXX tautology?
    return (
      <>
      <Header />
      <ProcessData config={configData} mongo_data={mongo_data} start={startDateTime} sdt={setStartDateTime} end={endDateTime} edt={setEndDateTime} bucket={bucket} sb={setBucket} item={item} si={setItem} email={email} se={setEmail} sc={setComplete} url={API_url} sd={setDatasent} confirmed={confirmed} set_confirmed={setConfirmed} />
      </>
    );
  } else {
    return (
      <>
      <Header />
      <InputForm config={configData} mongoitems={mongo_data} start={startDateTime} startdatesetter={setStartDateTime} end={endDateTime} enddatesetter={setEndDateTime} bucket={bucket} bucketsetter={setBucket} itemsetter={setItem} email={email} emailsetter={setEmail} completesetter={setComplete} />
      </>
    );
  }
}

export default App

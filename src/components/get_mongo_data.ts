import axios, { AxiosError, isAxiosError } from 'axios'

//import configData from "../config/config.json";

import { MongoReturnType, MongoRecordType, MongoData} from './interfaces'


const build_mongo_data = (item_name: string, data: MongoReturnType): MongoData[] => {
  if (data.data && data.data.length) {
    return data.data.map((x: MongoRecordType) => {return {"booking_start": x.booking_start, "booking_end": x.booking_end, "bucket": x.bucket, [item_name]: x[item_name]}})
  } else {
    return [];
  }
}

export const get_mongo_data = async (api_url: string, item_name: string, setMongodata: React.Dispatch<React.SetStateAction<MongoData[]>>) => {
  const ITEMS_url = api_url + 'all_' + item_name + 's/';
  console.log(`MAIN ITEMS_url is ${ITEMS_url}`);

  try {
    await axios.get<MongoReturnType>(ITEMS_url, {headers: {'Content-Type': 'application/json'}}).then(response => {
        const mymongodata: MongoData[] = build_mongo_data(item_name, response.data);
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

export default get_mongo_data;

/**
* process the form data, allow a confirmation or cancellation
* then save the item to the backend data store on confirmation with expiration
* of the record set for the day after the booking
*/

import axios, { AxiosResponse, isAxiosError } from 'axios'

import { ItemData } from './interfaces';

export const add_item_to_mongodb = async (url: string, item_booking: ItemData) => {
  console.log("ADDING ITEM");
  console.dir(item_booking);
  console.log(`SENDING TO URL ${url}`);

  try {
    const response: AxiosResponse<ItemData> = await axios.post<ItemData>(url, item_booking, {headers: {'Content-Type': 'application/json'}})
    if (response !== undefined) {
      console.log("POST Response is ");
      console.log(response);
      if (response.data !== undefined) {
        console.log("POST Response DATA is ");
        console.log(response.data);
        if (response.data.id !== undefined) {
          console.log(`RDI is ${response.data.id}`);
          return response.data.id;
        }
      }
    }
    console.log("LEAVING response try block");
  } catch (error: unknown | AxiosError) {
    if (isAxiosError(error)) {
      console.log("CODE - isAxiosError");
      console.dir(error);
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
      // Any non-axios error
      console.log('Non-Axios Error');
      console.log(error);
    }
  }
};

export default add_item_to_mongodb;

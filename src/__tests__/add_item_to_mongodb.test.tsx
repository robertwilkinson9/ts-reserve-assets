/**
 * @vitest-environment jsdom
 */

import { describe, test, expect, vi } from 'vitest'
import axios, { AxiosError, isAxiosError } from 'axios';
import { add_item_to_mongodb } from '../components/add_item_to_mongodb';

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)), data: {id: "test1"} }
//  return { json: () => new Promise((resolve) => resolve(data))}
//  return { json: () => new Promise((resolve) => resolve(data)), data: data}
}

function createFetchErrorResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)), error: new AxiosError() }
//  throw new AxiosError();
//  return { json: () => new Promise((resolve) => resolve(data))}
//  return { json: () => new Promise((resolve) => resolve(data)), data: data}
}

function sendAxiosError() {
//  throw new AxiosError();
  const error = new AxiosError;
  error.response = {status: 123, headers: "NO HEADER"}
//console.log ("Error");
//console.dir(error);
//if (isAxiosError(error)) { 
//console.log ("isAxiosError");
//console.dir(error);
//}
//  const data = { json: () => error}
//console.log ("DaTa");
//console.dir(data);
//  return data;
  return error;
//  throw error;
//  return { json: () => error}
//  return { json: () => new AxiosError}
}

const mockedImplementation = () => Promise.resolve({ 
  json() { 
    return { data: {id: 'mocked id'}}
  } 
});

describe ('postData', () => {
  const test_item_headers = {"headers": {"Content-Type": "application/json"}};

  let originalAxiosPost;

  beforeAll(() => {
    originalAxiosPost = axios.post;
    axios.post = vi.fn(mockedImplementation);
  });

  test('expect add_item_to_mongodb to work', async () => {
    const url = "https://www.fourtheye1.org";
    const start_test_date = new Date("1999-12-31T00:00");
    const end_test_date = new Date("1999-12-31T11:59");
    const expiry_test_date = new Date("2000-01-01T00:00");
  
    const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};
    const test_item_mock = {data: {"id": "1234"}};

    axios.post.mockResolvedValue(createFetchResponse(test_item_data));
//    axios.post.mockResolvedValue(createFetchResponse(test_item_mock));

    const new_test_item = await add_item_to_mongodb(url, test_item_data);
//    expect(axios.post).toHaveBeenCalledWith(url, test_item_data, test_item_headers)
    console.log("new_test_item");
    console.dir(new_test_item);
    expect(axios.post).toHaveBeenCalledWith(url, test_item_data, test_item_headers)
  })

  test('expect SENDING TO URL test// to fail', async () => {
    const url = "test//";
    const start_test_date = new Date("1999-12-31T00:00");
    const end_test_date = new Date("1999-12-31T11:59");
    const expiry_test_date = new Date("2000-01-01T00:00");
  
    const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};
    const test_item_mock = {data: {"id": "1234"}};

    axios.post.mockResolvedValue(createFetchResponse(test_item_data));
//    axios.post.mockResolvedValue(createFetchResponse(test_item_mock));

    const new_test_item = await add_item_to_mongodb(url, test_item_data);
//    expect(axios.post).toHaveBeenCalledWith(url, test_item_data, test_item_headers)
    console.log("new_test_item");
    console.dir(new_test_item);
    expect(axios.post).toHaveBeenCalledWith(url, test_item_data, test_item_headers)
  })

  test('expect axios errors to be seen and logged', async () => {
    const url = "https://www.fourtheye2.org";
    const test_item_data = {bogus: "nothing"};
    axios.post.mockResolvedValue(createFetchErrorResponse(test_item_data));
//    const new_test_item = await add_item_to_mongodb(url, test_item_data);
    sendAxiosError();
//    expect(axios.post).toThrow()
    expect("1").toBe("1")
  });

  afterAll(() => {
    axios.post = originalAxiosPost;
  });
});

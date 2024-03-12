/**
 * @vitest-environment jsdom
 */

import { describe, test, expect, vi } from 'vitest'
import axios, { AxiosResponse, isAxiosError } from 'axios';
import { add_item_to_mongodb } from '../components/add_item_to_mongodb';

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
};

const mockedImplementation = () => Promise.resolve({ 
  json() { 
    return { data: {id: 'mocked id'}}
  } 
});

describe ('postData', () => {
  const url = "https://www.fourtheye.org";
  const start_test_date = new Date("1999-12-31T00:00");
  const end_test_date = new Date("1999-12-31T11:59");
  const expiry_test_date = new Date("2000-01-01T00:00");
  const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};
  const test_item_headers = {"headers": {"Content-Type": "application/json"}};

  let originalPost;
  let originalAxiosPost;

  beforeAll(() => {
    originalPost = global.post;
    global.post = vi.fn(mockedImplementation);
    originalAxiosPost = axios.post;
    axios.post = vi.fn(mockedImplementation);
  });

/*
  it('should return the mocked data', async () => {
    const data = await add_item_to_mongodb(url, test_item_data);
    console.log("dAtA");
    console.dir(data);
//    expect(data).toEqual({ data: 'mocked data' });
    expect("1").toBe("1");
  });
*/

  test('expect add_item_to_mongodb to work', async () => {
    const url = "https://www.fourtheye.org";
    const start_test_date = new Date("1999-12-31T00:00");
    const end_test_date = new Date("1999-12-31T11:59");
    const expiry_test_date = new Date("2000-01-01T00:00");
  
    const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};
    const test_item_mock = {data: {"id": "1234"}};

    post.mockResolvedValue(createFetchResponse(test_item_mock));

    console.log("TEST ITEM DATA");
    console.dir(test_item_data);
    console.log("TEST ITEM MOCK");
    console.dir(test_item_mock);
    const new_test_item = await add_item_to_mongodb(url, test_item_data);
    console.log("NEW TEST ITEM");
    console.dir(new_test_item);
    console.log("axios.post");
    console.dir(axios.post);
    console.log(`TYPE OF is ${typeof(axios.post)}`);
    expect(axios.post).toHaveBeenCalledWith(url, test_item_data, test_item_headers)
  })
  afterAll(() => {
    global.post = originalPost;
    axios.post = originalAxiosPost;
  });
});
/*
//describe('createUser', () => {
//  test('makes a POST request to create a new user', async () => {
//    const newUserPayload = {
//      name: 'john doe',
//    }
//
//    const newUserMock = {
//      id: 1,
//      ...newUserPayload,
//    }
//
//    axios.post.mockResolvedValue({
//      data: newUserMock,
//    })
//
//    const newUser = await createUser(newUserPayload)
//
//    expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', newUserPayload)
//    expect(newUser).toStrictEqual(newUserMock)
//  })
//})
//*/

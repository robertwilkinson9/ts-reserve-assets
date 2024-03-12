import { MongoData } from './interfaces';
import { add_item_to_mongodb } from './add_item_to_mongodb';
import { ItemData } from './interfaces';

export const confirm_action = (url: string, mongo_data: MongoData[], item_booking: ItemData, booking_start: Date, booking_end: Date, bucket : number, config: configData, set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>, set_needreset: React.Dispatch<React.SetStateAction<boolean>>) => {
//  const ITEM_url: string = url + config.LCCOLLECTION + '/';
  const ITEM_url: string = url + '/';
/*
  console.log(`POST url is ${url} and ITEM_url is ${ITEM_url}`);
  console.log("POST item_booking is ");
  console.dir(item_booking);
  console.log(`booking_start is ${booking_start}`);
  console.log(`booking_end is ${booking_end}`);
  console.log("POST config is ");
  console.dir(config);
*/

  const id = add_item_to_mongodb(ITEM_url, item_booking);
  id.then(() => {
    const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item_booking};
    const tmp = mongo_data;
    tmp.push(new_record);
    console.log("SETTING MONGO DATA");
    set_mongodata(tmp);
    set_needreset(true);
  });
};

export default confirm_action;

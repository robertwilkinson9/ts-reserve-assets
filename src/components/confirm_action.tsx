import { MongoData } from './interfaces';
import { add_item_to_mongodb } from './add_item_to_mongodb';
import { ItemData } from './interfaces';

export const confirm_action = (url: string, item_booking: ItemData, booking_start: date_or_null, booking_end: date_or_null, bucket : number_or_null, config: configData) => {
  console.log("confirm_action CONFIG");
  console.dir(config);
//  const ITEM_url: string = url + config.LCCOLLECTION + '/';
  const ITEM_url: string = url + '/';
  console.log(`POST url is ${url} and ITEM_url is ${ITEM_url}`);
  console.log("POST item_booking is ");
  console.dir(item_booking);

  const id = add_item_to_mongodb(ITEM_url, item_booking);
  id.then(() => {
    const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item};
    const tmp = mongo_data;
    tmp.push(new_record);
    console.log("SETTING MONGO DATA");
    set_mongodata(tmp);
    set_needreset(true);
  });
};

console.log(`in components/confirm_action.tsx and confirm_action is ${typeof(confirm_action)}`);

export default confirm_action;

import { MongoData } from './interfaces';
import { add_item_to_mongodb } from './add_item_to_mongodb';
import { ItemData } from './interfaces';

export const confirm_action = (url: string, mongo_data: MongoData[], item_booking: ItemData, booking_start: Date, booking_end: Date, bucket : number, config: configData, set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>, set_needreset: React.Dispatch<React.SetStateAction<boolean>>) => {
//  console.log("config");
//  console.dir(config);
//  const ITEM_url: string = url + config.LCCOLLECTION + '/';
  const ITEM_url: string = url + '/';

  const id = add_item_to_mongodb(ITEM_url, item_booking);
  id.then(() => {
    const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item_booking};
    const tmp = mongo_data;
    tmp.push(new_record);
    set_mongodata(tmp);
    set_needreset(true);
  });
};

export default confirm_action;

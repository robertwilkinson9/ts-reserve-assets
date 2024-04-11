import { ConfirmActionProps, MongoData } from './interfaces';
import { add_item_to_mongodb } from './add_item_to_mongodb';
import { ItemData } from './interfaces';

export const confirm_action = (url, mongo_data, item_booking, booking_start, booking_end, bucket, config, set_mongodata, set_needreset : ConfirmActionProps) => {
//  const ITEM_url: string = url + '/';

//  const id = add_item_to_mongodb(ITEM_url, item_booking);
  console.dir(item_booking);
  const id = add_item_to_mongodb(url, item_booking);
  id.then(() => {
    //const config_item_name = config.ITEM_NAME
    //const item_name = item_booking.config_item_name;
    //const item_name1 = item_booking["config_item_name"];
    //console.log(`XXX config item name is ${config_item_name} and item name is ${item_name} and item name1 is ${item_name1}`);
    //console.log("ITEM BOOKING")
    //console.dir(item_booking);
    // const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item_booking.config.ITEM_NAME"};
    // const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item_name};
    const new_record: MongoData = item_booking;
    console.log("NEW RECORD")
    console.dir(new_record)
    const tmp = mongo_data;
    tmp.push(new_record);
    console.log("TMP2")
    console.dir(tmp)
    set_mongodata(tmp);
    set_needreset(true);
  });
};

export default confirm_action;

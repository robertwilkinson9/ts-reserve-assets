import { ConfirmActionProps, MongoData } from './interfaces';
import { add_item_to_mongodb } from './add_item_to_mongodb';
import { ItemData } from './interfaces';

export const confirm_action = (url, mongo_data, item_booking, booking_start, booking_end, bucket, config, set_mongodata, set_needreset : ConfirmActionProps) => {
//  const ITEM_url: string = url + '/';

//  const id = add_item_to_mongodb(ITEM_url, item_booking);
  const id = add_item_to_mongodb(url, item_booking);
  id.then(() => {
    const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item_booking};
    const tmp = mongo_data;
    tmp.push(new_record);
    set_mongodata(tmp);
    set_needreset(true);
  });
};

export default confirm_action;

//import handleConfirmProps from './interfaces';
import { confirm_action } from './confirm_action';

// console.log(`XX1 ${typeof(confirm_action)}`);

export const handleConfirm = (url: string, mongo_data: MongoData[], set_confirmed: React.Dispatch<React.SetStateAction<boolean>>, item_booking: ItemData, booking_start: date_or_null, booking_end: date_or_null, bucket : number_or_null, config: configData, set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>, set_needreset: React.Dispatch<React.SetStateAction<boolean>>) => {
/*
  console.log(`handleConfirm booking_start is ${booking_start}`);
  console.log("handleConfirm config is ");
  console.dir(config);
*/
  confirm_action(url, mongo_data, item_booking, booking_start, booking_end, bucket, config, set_mongodata, set_needreset);
  set_confirmed(true);
};

export default handleConfirm;

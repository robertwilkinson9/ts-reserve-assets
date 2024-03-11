//import handleConfirmProps from './interfaces';
import { confirm_action } from './confirm_action';

console.log(`XX1 ${typeof(confirm_action)}`);

export const handleConfirm = (url: string, set_confirmed: React.Dispatch<React.SetStateAction<string_or_null>>, item_booking: ItemData, booking_start: date_or_null, booking_end: date_or_null, bucket : number_or_null, config: configData) => {
  console.log("handleConfirm config is ");
  console.dir(config);
  confirm_action(url, item_booking, booking_start, booking_end, bucket, config);
  set_confirmed(true);
};

export default handleConfirm;

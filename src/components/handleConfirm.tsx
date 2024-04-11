import { handleConfirmProps } from './interfaces';
import { confirm_action } from './confirm_action';

export const handleConfirm = (url, mongo_data, set_confirmed, item_booking, booking_start, booking_end, bucket, config, set_mongodata, set_needreset : handleConfirmProps) => {
  confirm_action(url, mongo_data, item_booking, booking_start, booking_end, bucket, config, set_mongodata, set_needreset);
  set_confirmed(true);
};

export default handleConfirm;

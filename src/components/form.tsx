import { form_contents } from './form_contents';
import { overlap } from './overlap';

import { MongoData, InputFormProps } from './interfaces';

export const InputForm = ({config, mongo_data, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete}: InputFormProps) => {
  const buttonText = `Reserve ${config.ITEM_NAME}`;

  if (booking_end) {
    if (booking_start) {
      { /*
        we find all the overlapping items from mongo_data with our start date and our end date
        a to b is one date range, x to y is another date range
        we check x < a < y or x < b < y or a < x < b or a < y < b - which I think is correct?
        we want a list of all of the items which are already booked so we can filter these from the list we present
      */ }

      const overlapv = mongo_data.filter((it) => {return overlap(booking_start, booking_end, new Date(it.booking_start), new Date(it.booking_end));});

      const form_type = 0;
      return form_contents({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, form_type});
    } else {
      const overlapv: MongoData[] = [];
      const form_type = 1;
      return form_contents({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, form_type});
    }
  } else {
    const overlapv: MongoData[] = [];
    const form_type = 2;
    return form_contents({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, form_type});
  }
}

export default InputForm;

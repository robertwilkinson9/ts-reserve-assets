export interface AddEmailProps {
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface BucketProps {
   bucket : number | null;
   bucketsetter: React.Dispatch<React.SetStateAction<number | null>>
}

export interface ButtonProps {
  cb : React.ChangeEventHandler<HTMLInputElement>;
  lcf: string;
  ucf: string;
  bucketst: string;
  checked: boolean;
}

export interface CalendarProps {
   label: string;
   selected: Date | null;
   setter: React.Dispatch<React.SetStateAction<Date | null>>
   setter2?: React.Dispatch<React.SetStateAction<Date | null>>
}

export interface InputFormProps {
  config: Object;
  start: Date | null;
  startdatesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  end: Date | null;
  enddatesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  bucket: number | null;
  bucketsetter: React.Dispatch<React.SetStateAction<number | null>>;
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
  completesetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ItemData {
  "booking_start": string;
  "booking_end": string;
  "expireAt": string;
  "bucket": number;
  "item": string;
  "email": string
}

export interface ItemsProps {
  bucket: number | null;
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ProcessDataProps {
   start: Date | null;
   sdt: React.Dispatch<React.SetStateAction<Date|null>>,
   end: Date | null;
   edt: React.Dispatch<React.SetStateAction<Date|null>>,
   bucket: number | null;
   sf: React.Dispatch<React.SetStateAction<number|null>>,
   item: string | null;
   sd: React.Dispatch<React.SetStateAction<string|null>>,
   email: string | null;
   se: React.Dispatch<React.SetStateAction<string|null>>,
   sc: React.Dispatch<React.SetStateAction<boolean>>,
   url: string;
}

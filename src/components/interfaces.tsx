export type date_or_null = Date | null;
export type number_or_null = number | null;
export type string_or_null = string | null;

export interface AddEmailProps {
  email: string_or_null;
  set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
}

export interface BucketLabelProps {
  label: string;
}

export interface BucketProps {
  config: configData;
  bucket : number_or_null;
  set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
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
  selected: date_or_null;
  date_setter: React.Dispatch<React.SetStateAction<date_or_null>>;
  date_setter2?: React.Dispatch<React.SetStateAction<date_or_null>>;
}

export interface InputFormProps {
  config: configData;
  mongo_data: MongoData[];
  booking_start: date_or_null;
  set_booking_start: React.Dispatch<React.SetStateAction<date_or_null>>;
  booking_end: date_or_null;
  set_booking_end: React.Dispatch<React.SetStateAction<date_or_null>>;
  bucket: number_or_null;
  set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
  set_item: React.Dispatch<React.SetStateAction<string_or_null>>;
  email: string_or_null;
  set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
  set_complete: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ItemData {
  booking_start: string;
  booking_end: string;
  expireAt: string;
  bucket: number;
  email: string
}

/*  item?: string; */

export interface MongoData {
  booking_start: string;
  booking_end: string;
  bucket: number;
  [key: string]: any;
}

export interface ItemsProps {
  config: configData;
  bucket: number_or_null;
  bucket_items?: MongoData[];
  set_item: React.Dispatch<React.SetStateAction<string_or_null>>;
}

export interface ProcessDataProps {
  config: configData;
  mongo_data: MongoData[];
  set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>;
  booking_start: date_or_null;
  set_booking_start: React.Dispatch<React.SetStateAction<date_or_null>>;
  booking_end: date_or_null;
  set_booking_end: React.Dispatch<React.SetStateAction<date_or_null>>;
  bucket: number_or_null;
  set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
  item: string_or_null;
  set_item: React.Dispatch<React.SetStateAction<string_or_null>>;
  email: string_or_null;
  set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
  set_complete: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
  confirmed: boolean;
  set_confirmed: React.Dispatch<React.SetStateAction<boolean>>;
  set_needreset: React.Dispatch<React.SetStateAction<boolean>>;
}

interface bucketData {
  name: string;
  prefix?: string;
  suffix?: string;
  ifirst?: number;
  ilast?: number;
  items?: string[];
}

export interface configData {
  APIPORT: string; // XXX should be a number? 
  ITEM_NAME: string;
  ITEM_LABEL: string;
  BUCKET_NAME: string;
  BUCKETS: bucketData[];
}

export type MongoRecordType = {
  _id: string;
  booking_start: string;
  booking_end: string;
  expireAt: string;
  bucket: number;
  item: string;
  email: string;
  __v?: number;
};

export type Select_type = {
  value: string;
  label: string;
};

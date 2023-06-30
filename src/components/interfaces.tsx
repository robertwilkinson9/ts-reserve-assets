export interface AddEmailProps {
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface BucketLabelProps {
  label: string;
}

export interface BucketProps {
  config: configData;
  bucket : number | null;
  bucketsetter: React.Dispatch<React.SetStateAction<number | null>>;
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
  setter: React.Dispatch<React.SetStateAction<Date | null>>;
  setter2?: React.Dispatch<React.SetStateAction<Date | null>>;
}

export interface InputFormProps {
  config: configData;
  mongo_data: MongoData[];
  booking_start: Date | null;
  startdatesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  booking_end: Date | null;
  enddatesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  bucket: number | null;
  bucketsetter: React.Dispatch<React.SetStateAction<number | null>>;
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
  completesetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ItemData {
  booking_start: string;
  booking_end: string;
  expireAt: string;
  bucket: number;
  item: string;
  email: string
}

export interface MongoData {
  booking_start: string;
  booking_end: string;
  bucket: number;
  item: string;
}

export interface ItemsProps {
  config: configData;
  bucket: number | null;
  bucket_items?: MongoData[];
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ProcessDataProps {
  config: configData;
  mongo_data: MongoData[];
  set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>;
  booking_start: Date | null;
  set_booking_start: React.Dispatch<React.SetStateAction<Date|null>>;
  booking_end: Date | null;
  set_booking_end: React.Dispatch<React.SetStateAction<Date|null>>;
  bucket: number | null;
  set_bucket: React.Dispatch<React.SetStateAction<number|null>>;
  item: string | null;
  set_item: React.Dispatch<React.SetStateAction<string|null>>;
  email: string | null;
  set_email: React.Dispatch<React.SetStateAction<string|null>>;
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
  ITEM_NAME: string;
  BUCKET_NAME: string;
  BUCKETS: bucketData[];
}

export type string_or_null = string | null;
export type date_or_null = Date | null;

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

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
  mongoitems: MongoRecordType[];
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
  booking_start: string;
  booking_end: string;
  expireAt: string;
  bucket: number;
  item: string;
  email: string
}

export interface ItemsProps {
  config: configData;
  bucket: number | null;
  bucket_items?: ItemData[];
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ProcessDataProps {
  config: configData;
  mongo_data: MongoRecordType[];
  start: Date | null;
  sdt: React.Dispatch<React.SetStateAction<Date|null>>;
  end: Date | null;
  edt: React.Dispatch<React.SetStateAction<Date|null>>;
  bucket: number | null;
  sb: React.Dispatch<React.SetStateAction<number|null>>;
  item: string | null;
  si: React.Dispatch<React.SetStateAction<string|null>>;
  email: string | null;
  se: React.Dispatch<React.SetStateAction<string|null>>;
  sc: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
  sd: React.Dispatch<React.SetStateAction<boolean>>;
  confirmed: boolean;
  set_confirmed: React.Dispatch<React.SetStateAction<boolean>>;
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

export type MongoType = {
  success: boolean;
  data?: MongoRecordType[];
};

export type Select_type = {
  value: string,
  label: string,
};

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
  mongoitems: MongoData[];
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
  start: Date | null;
  ssdt: React.Dispatch<React.SetStateAction<Date|null>>;
  end: Date | null;
  sedt: React.Dispatch<React.SetStateAction<Date|null>>;
  bucket: number | null;
  setbucket: React.Dispatch<React.SetStateAction<number|null>>;
  item: string | null;
  setitem: React.Dispatch<React.SetStateAction<string|null>>;
  email: string | null;
  setemail: React.Dispatch<React.SetStateAction<string|null>>;
  setcomplete: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
  confirmed: boolean;
  set_confirmed: React.Dispatch<React.SetStateAction<boolean>>;
  setmongodata: React.Dispatch<React.SetStateAction<MongoData[]>>;
  setneedreset: React.Dispatch<React.SetStateAction<boolean>>;
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

//export type MongoType = {
//  success: boolean;
//  data?: MongoRecordType[];
//};

export type Select_type = {
  value: string;
  label: string;
};

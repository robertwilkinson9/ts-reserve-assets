export type date_or_null = Date | null;
export type number_or_null = number | null;
export type string_or_null = string | null;

export interface AddEmailProps {
  email: string_or_null;
  set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
  helper_text: string_or_null;
  placeholder_text: string_or_null;
}

export interface BucketLabelProps {
  label: string;
}

export interface BucketReadProps {
  config: configData;
  bucket : number_or_null;
}

export interface BucketProps {
  config: configData;
  bucket : number_or_null;
  set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
  items_available: boolean[];
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

export interface Ifp {
  config: configData;
  booking_start: date_or_null;
  set_booking_start: React.Dispatch<React.SetStateAction<date_or_null>>;
  booking_end: date_or_null;
  set_booking_end: React.Dispatch<React.SetStateAction<date_or_null>>;
  bucket: number_or_null;
  set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
  set_item: React.Dispatch<React.SetStateAction<string_or_null>>;
  email: string_or_null;
  set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
  auxdata: AuxDataRecordType[];
  set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
  set_complete: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InputFormProps extends Ifp {
  mongo_data: MongoData[];
}

export interface ItemData {
  booking_start: string;
  booking_end: string;
  expireAt: string;
  bucket: number;
  email: string
  [key: string]: string | number; // 👈️ variable key
}

export interface ItemsProps {
  id?: string;
  key?: string;
  config: configData;
  bucket: number_or_null;
  allocated_items?: MongoData[];
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
  auxdata: AuxDataRecordType[];
  set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
  set_complete: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
  confirmed: boolean;
  set_confirmed: React.Dispatch<React.SetStateAction<boolean>>;
  set_needreset: React.Dispatch<React.SetStateAction<boolean>>;
}

interface bucketData {
  NAME: string;
  PREFIX?: string;
  SUFFIX?: string;
  IFIRST?: number;
  ILAST?: number;
  ITEMS?: string[];
}

export interface AuxIdType {
  id: string;
}

export interface AuxDataRecordType extends AuxIdType {
  value: string;
}

export interface AuxConfigRecordType extends AuxIdType {
  label: string;
  dbname: string;
}

export interface AuxType extends AuxConfigRecordType {
  value: string;
}

interface FormData {
  label: string;
  helper_text: string;
  email_helper_text: string;
}

export interface configData {
  APIPORT: number;
  COLLECTION: string;
  ITEM_NAME: string;
  ITEM_LABEL: string;
  BUCKET_NAME: string;
  BUCKETS: bucketData[];
  AUXILLIARY?: AuxConfigRecordType[];
  FORM_DATA: FormData[];
}

export type MongoData = {
  booking_start: Date;
  booking_end: Date;
  bucket: number;
  [key: string]: string | number | Date | undefined; // 👈️ variable key
};

export type MongoRecordType = MongoData & {
  _id: string;
  expireAt: string;
  item: string;
  email: string;
  __v?: number;
};

export type MongoReturnType = {
  success: boolean;
  data: MongoRecordType[];
};

export type Select_type = {
  value: string;
  label: string;
};

//  id: AuxIdType;
export interface inputProps {
  label: string;
  id: string;
  auxdata: AuxDataRecordType[];
  set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
}

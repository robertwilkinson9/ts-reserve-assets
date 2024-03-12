//import handleCancelProps from './interfaces';
export const handleCancel = (set_needreset: React.Dispatch<React.SetStateAction<string_or_null>>) => {
  set_needreset(true);
}

export default handleCancel;

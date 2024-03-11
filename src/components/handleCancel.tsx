//import handleCancelProps from './interfaces';
// export const handleCancel = ({ set_needreset } : handleCancelProps) => {
export const handleCancel = (set_needreset: React.Dispatch<React.SetStateAction<string_or_null>>) => {
  console.log("IN FN handleCancel");
  console.log(typeof(set_needreset));
  set_needreset(true);
}

export default handleCancel;

import { handleCancelProps } from './interfaces';
export const handleCancel = (set_needreset : handleCancelProps) => {
  set_needreset(true);
}

export default handleCancel;

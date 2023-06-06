export interface cleanProps {
  sdt: React.Dispatch<React.SetStateAction<Date|null>>;
  edt: React.Dispatch<React.SetStateAction<Date|null>>;
  sf: React.Dispatch<React.SetStateAction<number|null>>;
  sd: React.Dispatch<React.SetStateAction<string|null>>;
  se: React.Dispatch<React.SetStateAction<string|null>>;
  sc: React.Dispatch<React.SetStateAction<boolean>>;
}

{ /*
  setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setEndDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setFloor: React.Dispatch<React.SetStateAction<number|null>>,
  setDesk: React.Dispatch<React.SetStateAction<string|null>>,
  setEmail: React.Dispatch<React.SetStateAction<string|null>>,
  setComplete: React.Dispatch<React.SetStateAction<boolean>>,

const reset = (setStartDateTime, setEndDateTime, setFloor, setDesk, setEmail, setComplete): void =>
{
  setStartDateTime(new Date());
  setEndDateTime(null);
  setFloor(0);
  setDesk(null);
  setEmail(null);
  setComplete(false);
}
*/ }

const reset = (
  setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setEndDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setFloor: React.Dispatch<React.SetStateAction<number|null>>,
  setDesk: React.Dispatch<React.SetStateAction<string|null>>,
  setEmail: React.Dispatch<React.SetStateAction<string|null>>,
  setComplete: React.Dispatch<React.SetStateAction<boolean>>,
): void =>
{
  setStartDateTime(new Date());
  setEndDateTime(null);
  setFloor(0);
  setDesk(null);
  setEmail(null);
  setComplete(false);
}

export const Clean = ({sdt, edt, sf, sd, se, sc} : cleanProps) => {
  console.log("IN CLEAN");
  reset(sdt, edt, sf, sd, se, sc);
  console.log("JUST RESET");
  return (
    <>
    </>
  );
}

export default Clean

import './floor.css';

export interface FloorProps {
   floor : number | null;
   floorsetter: React.Dispatch<React.SetStateAction<number | null>>
}

interface ButtonProps {
  cb : React.ChangeEventHandler<HTMLInputElement>;
  lcf: string;
  ucf: string;
  floorst: string;
  checked: boolean;
}

const FloorLabel = () => {
  return (
    <>
    <div className="row" id="pull-left">
      <div className="col-sm-12 align-items-left" >
        <label className="mb-0 font-weight-bold flabel">Floor</label>
      </div>
    </div>
    </>
  );
}

const FloorButton = ({cb, lcf, ucf, floorst, checked} : ButtonProps) => {
  if (checked) {
    return(
      <>
      <div className="row" id="floor_radios">
        <div className="col-sm-6">
          <input type="radio" value={floorst} id={lcf} onChange={cb} name="floor" defaultChecked />
         <label htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  } else {
    return(
      <>
      <div className="row" id="floor_radios">
        <div className="col-sm-6">
          <input type="radio" value={floorst} id={lcf} onChange={cb} name="floor"/>
         <label htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  }
}

export const Floor = ({floor, floorsetter}: FloorProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HaNdLe ChAnGe");
    console.log(e.target.value)
    floorsetter(parseInt(e.target.value, 10));
  }

  switch (floor)  {
    case 0:
        return(
        <>
          <FloorLabel />
          <div className="container">
            <FloorButton cb={handleChange} lcf="ground" ucf="Ground" floorst="0" checked={true} />
            <FloorButton cb={handleChange} lcf="first" ucf="First" floorst="1" checked={false} />
            <FloorButton cb={handleChange} lcf="second" ucf="Second" floorst="2" checked={false} />
          </div>
        </>)
    case 1:
        return(
        <>
          <FloorLabel />
          <div className="container">
            <FloorButton cb={handleChange} lcf="ground" ucf="Ground" floorst="0" checked={false} />
            <FloorButton cb={handleChange} lcf="first" ucf="First" floorst="1" checked={true} />
            <FloorButton cb={handleChange} lcf="second" ucf="Second" floorst="2" checked={false} />
          </div>
        </>)
    case 2:
        return(
        <>
          <FloorLabel />
          <div className="container">
            <FloorButton cb={handleChange} lcf="ground" ucf="Ground" floorst="0" checked={false} />
            <FloorButton cb={handleChange} lcf="first" ucf="First" floorst="1" checked={false} />
            <FloorButton cb={handleChange} lcf="second" ucf="Second" floorst="2" checked={true} />
          </div>
        </>)
    default:
        return(
        <>
        </>)
  }
};

export default Floor;

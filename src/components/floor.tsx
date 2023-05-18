// import './floor.css';

export interface FloorProps {
   floor : number | null;
   floorsetter: React.Dispatch<React.SetStateAction<number | null>>
}

interface ButtonProps {
  cb : React.ChangeEventHandler<HTMLInputElement>;
}

const Button0 = ({cb} : ButtonProps) => {
      return (
        <>
        <div style={{paddingBottom: "120px"}} className="col-md-4 d-flex align-items-center lower_margin" id="floor_radios" >
          <label className="mb-0 font-weight-bold">Floor</label>
          <input type="radio" value="0" id="ground" onChange={cb} name="floor" defaultChecked/>
          <label htmlFor="ground" className="red">Ground</label>
          <input type="radio" value="1" id="first" onChange={cb} name="floor" />
              <label htmlFor="first">First</label>
          <input type="radio" value="2" id="second" onChange={cb} name="floor" />
          <label htmlFor="second">Second</label>
        </div>
        </>
      );
};

const Button1 = ({cb} : ButtonProps) => {
      return (
        <>
        <div style={{paddingBottom: "120px"}} className="col-md-4 d-flex align-items-center lower_margin" id="floor_radios" >
          <label className="mb-0 font-weight-bold">Floor</label>
          <input type="radio" value="0" id="ground" onChange={cb} name="floor" />
          <label htmlFor="ground" className="red">Ground</label>
          <input type="radio" value="1" id="first" onChange={cb} name="floor" defaultChecked />
              <label htmlFor="first">First</label>
          <input type="radio" value="2" id="second" onChange={cb} name="floor" />
          <label htmlFor="second">Second</label>
        </div>
        </>
      );
};

const Button2 = ({cb} : ButtonProps) => {
      return (
        <>
        <div style={{paddingBottom: "120px"}} className="col-md-4 d-flex align-items-center lower_margin" id="floor_radios" >
          <label className="mb-0 font-weight-bold">Floor</label>
          <input type="radio" value="0" id="ground" onChange={cb} name="floor" />
          <label htmlFor="ground" className="red">Ground</label>
          <input type="radio" value="1" id="first" onChange={cb} name="floor" />
              <label htmlFor="first">First</label>
          <input type="radio" value="2" id="second" onChange={cb} name="floor" defaultChecked />
          <label htmlFor="second">Second</label>
        </div>
        </>
      );
};

export const Floor = ({floor, floorsetter}: FloorProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    floorsetter(parseInt(e.target.value, 10));
  }

  switch (floor)  {
    case 0:
        return(
        <>
        <Button0 cb={handleChange} />
        </>)
    case 1:
        return(
        <>
        <Button1 cb={handleChange} />
        </>)
    case 2:
        return(
        <>
        <Button2 cb={handleChange} />
        </>)
    default:
        return(
        <>
        </>)
  }
};

export default Floor;

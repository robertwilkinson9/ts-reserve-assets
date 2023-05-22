import './floor.css';

//import { Radio, RadioGroup} from 'react-radio-group'

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
{ /*
         <RadioGroup name="floor" defaultValue="0" onChange={cb}>
            <div className="radio-button-background">
                <Radio value="0" className="radio-button" />Ground Floor
            </div>
            <div className="radio-button-background">
                <Radio value="1" className="radio-button" />First Floor
            </div>
            <div className="radio-button-background">
                <Radio value="2" className="radio-button" />Second Floor
            </div>
          </RadioGroup>
*/ }

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
{ /*
         <RadioGroup name="floor" defaultValue="1" onChange={cb}>
            <div className="radio-button-background">
                <Radio value="0" className="radio-button" />Ground Floor
            </div>
            <div className="radio-button-background">
                <Radio value="1" className="radio-button" />First Floor
            </div>
            <div className="radio-button-background">
                <Radio value="2" className="radio-button" />Second Floor
            </div>
          </RadioGroup>
*/ }
        </>
      );
};

const Button2 = ({cb} : ButtonProps) => {
{ /*
  console.log("typeof(cb) is ", typeof(cb));
  const mycb = () => {
    console.log("SECoND button HANDLER");
  }
*/ }
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

{ /*
<RadioGroup name="fruits" onChange={(e) => handleOnChange(e)}>
*/ }
{ /*
         <RadioGroup name="floor" defaultValue="2" onChange={mycb}>
            <div className="radio-button-background">
                <Radio value="0" className="radio-button" />Ground Floor
            </div>
            <div className="radio-button-background">
                <Radio value="1" className="radio-button" />First Floor
            </div>
            <div className="radio-button-background">
                <Radio value="2" className="radio-button" />Second Floor
            </div>
          </RadioGroup>
*/ }

        </>
      );
};
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

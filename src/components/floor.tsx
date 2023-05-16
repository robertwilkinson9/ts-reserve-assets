import './floor.css';

export interface FloorProps {
   floorsetter: React.Dispatch<React.SetStateAction<number | null>>
}

export const Floor = ({floorsetter}: FloorProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    floorsetter(parseInt(e.target.value, 10));
  }

  return (
    <>
    <div style={{paddingBottom: "100px"}} className="col-md-4 d-flex align-items-center lower_margin" id="floor_radios" >
      <label className="mb-0 font-weight-bold">Floor</label>
      <input type="radio" value="0" id="ground" onChange={handleChange} name="floor" />
      <label htmlFor="ground" className="red">Ground</label>
      <input type="radio" value="1" id="first" onChange={handleChange} name="floor" />
      <label htmlFor="first">First</label>
      <input type="radio" value="2" id="second" onChange={handleChange} name="floor" />
      <label htmlFor="second">Second</label>
    </div>
    </>
  );
};

export default Floor;

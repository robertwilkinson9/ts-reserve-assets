export interface FloorProps {
   floorsetter: React.Dispatch<React.SetStateAction<number | null>>
}

export const Floor = ({floorsetter}: FloorProps) => {

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
  floorsetter(parseInt(e.target.value, 10));
//        this.setState({floor: e.target.value        })
}

    return (
        <>
        <h4>Floor</h4>
        <div className="col-md-4 d-flex align-items-center">
            <label className="mb-0 font-weight-bold">Floor</label>
              <input type="radio" value="0" id="ground"
                onChange={handleChange} name="floor" />
              <label htmlFor="ground">Ground</label>
              <input type="radio" value="1" id="first"
                onChange={handleChange} name="floor" />
              <label htmlFor="first">First</label>
              <input type="radio" value="2" id="second"
                onChange={handleChange} name="floor" />
              <label htmlFor="second">Second</label>
        </div>
        </>
    );
};

export default Floor;

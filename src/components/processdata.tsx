export interface ProcessDataProps {
   start: Date | null;
   end: Date | null;
   floor: number | null;
   desk: string | null;
   email: string | null;
}

const Floor = ["Ground", "First", "Second"];
 
export const ProcessData = ({ start, end, floor, desk, email } : ProcessDataProps) => {
  let sdstr = "No start date available"
  if (start) {
    sdstr = `start date is ${start}`;
  }
  let edstr = "No end date available"
  if (end) {
    edstr = `end date is ${end}`;
  }
  let fstr = "No Floor";
  if (floor === 0 || floor === 1 || floor === 2) {
    fstr = Floor[floor] + " floor";
  }
  return (
    <>
    <h4> ProcessData </h4>
    <p>{sdstr}</p>
    <p>{edstr}</p>
    <p>{fstr}</p>
    <p>{desk}</p>
    <p>{email}</p>
    </>
  );
};

export default ProcessData

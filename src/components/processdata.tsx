{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }

export interface ProcessDataProps {
   start: Date | null;
   floor: number | null;
   desk: string | null;
   email: string | null;
}

const Floor = ["Ground", "First", "Second"];
 
export const ProcessData = ({ start, floor, desk, email } : ProcessDataProps) => {
  let sdstr = "No start date available"
  if (start) {
    let sstr = "null"
    sstr = start.toLocaleDateString();
    sdstr = `start date is ${sstr}`;
  }
  let fstr = "No Floor";
  if (floor === 0 || floor === 1 || floor === 2) {
    fstr = Floor[floor] + " floor";
  }
  return (
    <>
    <h4> ProcessData </h4>
    <p>{sdstr}</p>
    <p>{fstr}</p>
    <p>{desk}</p>
    <p>{email}</p>
    </>
  );
};

export default ProcessData

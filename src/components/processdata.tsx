{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }

export interface ProcessDataProps {
   start: Date | null;
}

export const ProcessData = ({ start } : ProcessDataProps) => {
  let sstr = "null"
  let sdstr = "No start date available"
  if (start) {
    sstr = start.toLocaleDateString();
//    sstr = start.toString();
    sdstr = `start date is ${sstr}`;
  }
  return (
    <>
    <h4> ProcessData </h4>
    <p>{sdstr}</p>
    </>
  );
};

export default ProcessData

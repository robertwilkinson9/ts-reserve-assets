{ /*
import React, { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
*/ }

type DeskEmail = {
  desk: string,
  email: string,
};

const desks: DeskEmail[] = [ {desk: "2f27", email: ""} , {desk: "2f26", email: ""} , {desk: "2f25", email: ""} ];

//const desks: string[] = [ "2f27", "2f26", "2f25"];
console.log(desks);

// const emptydesks: DeskEmail[] = desks.forEach(item => {desk:item, email: ""}});
//let emptydesks: DeskEmail[];

//desks.forEach(item => emptydesks.push({desk:item, email: ""}));


export const emptydesks = (desks: DeskEmail[]): DeskEmail[] => {
  desks.foreach(item => {item.email = ""});
}
console.log(emptydesks(desks));


{ /*

emptydesks: DeskEmail[] =
[
  {
   desk: "2f27",
   email: ""
  },
  {
   desk: "2f27",
   email: ""
  }
];

export const Desks = () => {
  const [desks, setDesks] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default Desk

*/ }

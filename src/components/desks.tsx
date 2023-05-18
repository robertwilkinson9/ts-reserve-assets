import Select from 'react-select'

type Select_type = {
  value: string,
  label: string,
};

const desk2select = (input: string): Select_type => {
  return {value: input, label: input};
}

{ /*
type DeskEmail = {
  desk: string,
  email: string,
};

const desk2deskemail = (input: string): DeskEmail => {
  return {desk: input, email: ""};
}

const desks: string[] = [ "2f27", "2f26", "2f25", "2f24"];
console.log(desks);

function emptydesks(desks: string[]): DeskEmail[] {
  const edesks: DeskEmail[] = [];
  desks.forEach(item => edesks.push(desk2deskemail(item)));
  console.log(edesks);
  return edesks;
}

const emptieddesks = emptydesks(desks)
console.log(emptieddesks);

function desks_select(desks: string[]): Select_type[] {
  const select_desks: Select_type[] = [];
  desks.forEach(item => select_desks.push(desk2select(item)));
  console.log(select_desks);
  return select_desks;
}

const select_desk_list = desks_select(desks)
console.log(select_desk_list);
*/ }

const desks_select = (desks: string[]): Select_type[] => {
  const select_desks: Select_type[] = [];
  console.log("DESKS");
  console.log(desks);
  desks.forEach(item => select_desks.push(desk2select(item)));
  console.log("SELECT_DESKS");
  console.log(select_desks);
  return select_desks;
}

export interface DesksProps {
  floor: number | null;
}

const listbuild = (istart:number, ilast:number, prefix: string) => {
  let desks: string[] = [];
  for (let i = istart; i <= ilast; i++) {
    let d = "";
    if (i < 10) {
         d = `${prefix}0${i}`;
    } else {
         d = `${prefix}${i}`;
       }
       console.log(d);
       desks.push(d);
    }
     
  console.log(desks);
  return desks;
}
   
export const Desks = ({ floor } : DesksProps) => {
   console.log(`Floor number is ${floor}`);

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

   let select_desk_list: Select_type[] = [];
   let desks: string[] = [];
   if (floor === 0) {
     const istart = 7;
     const ilast = 43;
{ /*
     for (let i = istart; i <= ilast; i++) {
       let d = "";
       if (i < 10) {
         d = `gf0${i}`;
       } else {
         d = `gf${i}`;
       }
       console.log(d);
       desks.push(d);
     }
     
     console.log(desks);
     const desks = listbuild({istart: {istart}, ilast: {ilast}, prefix: "gf"});
     const desks = listbuild(istart, ilast, "gf");
     select_desk_list: Select_type[] = desks_select(desks)
*/}
     let desks = listbuild(istart, ilast, "gf");
     console.log(desks);
   } else if (floor == 1) {
// ff08 - 33
     const istart = 7;
     const ilast = 33;
     console.log(`start ${istart} last ${ilast}`);
     desks = listbuild(istart, ilast, "ff");
     console.log(desks);
   } else if (floor == 2) {
// 2f07 - 27
     const istart = 7;
     const ilast = 27;
     console.log(`start ${istart} last ${ilast}`);
     desks = listbuild(istart, ilast, "2f");
     console.log(desks);
   } else {
     console.log(`Bad floor ${floor}`);
     alert(`Bad floor ${floor}`);
   }
   console.log("xDESKS");
   console.log(desks);
   select_desk_list = desks_select(desks)
   console.log("SELECT_DESK_LIST");
   console.log(select_desk_list);

   return (
     <>
     <div className="col-md-4 d-flex align-items-center">
       <label className="mb-0 font-weight-bold">Desk</label>
         <Select options={select_desk_list} />
     </div>
     </>
   );
};

export default Desks;



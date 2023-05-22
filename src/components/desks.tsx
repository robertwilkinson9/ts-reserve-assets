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
  desks.forEach(item => select_desks.push(desk2select(item)));
  return select_desks;
}

export interface DesksProps {
  floor: number | null;
  desksetter: React.Dispatch<React.SetStateAction<string | null>>;
}

const listbuild = (istart:number, ilast:number, prefix: string) => {
  let desks: string[] = [];
  for (let i = istart; i <= ilast; i++) {
    let d = "";
// sprintf?
    if (i < 10) {
         d = `${prefix}0${i}`;
    } else {
         d = `${prefix}${i}`;
       }
       desks.push(d);
    }
     
  return desks;
}
   
export const Desks = ({ floor, desksetter } : DesksProps) => {
//   console.log(`desksetter is ${desksetter}`);

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

   let desks: string[] = [];
   if (floor === 0) {
     const istart = 7;
     const ilast = 43;
     desks = listbuild(istart, ilast, "gf");
   } else if (floor == 1) {
     const istart = 7;
     const ilast = 33;
     desks = listbuild(istart, ilast, "ff");
   } else if (floor == 2) {
     const istart = 7;
     const ilast = 27;
     desks = listbuild(istart, ilast, "2f");
   } else {
     console.log(`Bad floor ${floor}`);
     alert(`Bad floor ${floor}`);
   }
   const select_desk_list: Select_type[] = desks_select(desks)

   return (
     <>
     <div id="deskPulldown">
       <label className="mb-0 font-weight-bold">Desk</label>
         <Select options={select_desk_list} onChange={(choice) => desksetter(choice!.value)}/>
     </div>
     </>
   );
};

export default Desks;

import Select from 'react-select'

type DeskEmail = {
  desk: string,
  email: string,
};

const desk2deskemail = (input: string): DeskEmail => {
  return {desk: input, email: ""};
}

type Select_type = {
  value: string,
  label: string,
};

const desk2select = (input: string): Select_type => {
  return {value: input, label: input};
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

export interface DesksProps {
  floor: number | null;
}

export const Desks = ({ floor } : DesksProps) => {
   console.log(`Floor number is ${floor}`);

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

   let select_desk_list = [];
   if (floor === 0) {
// gf07 - 43
     const istart = 7;
     const ilast = 43;
     for (let i = istart; i <= ilast; i++) {
       let d = "";
       if (i < 10) {
         d = `gf0${i}`;
       } else {
         d = `gf${i}`;
       }
       console.log(d);
       select_desk_list.push(d);
     }
   } else if (floor == 1) {
// ff08 - 33
     const istart = 7;
     const ilast = 33;
     console.log(`start ${istart} last ${ilast}`);
   } else if (floor == 2) {
// 2f07 - 27
     const istart = 7;
     const ilast = 27;
     console.log(`start ${istart} last ${ilast}`);
   } else {
     console.log(`Bad floor ${floor}`);
     alert(`Bad floor ${floor}`);
   }

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



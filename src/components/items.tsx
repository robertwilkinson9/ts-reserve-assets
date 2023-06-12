import Select from 'react-select'

import { ItemsProps } from './interfaces';

type Select_type = {
  value: string,
  label: string,
};

const item2select = (input: string): Select_type => {
  return {value: input, label: input};
}

const items_select = (items: string[]): Select_type[] => {
  const select_items: Select_type[] = [];
  items.forEach(item => select_items.push(item2select(item)));
  return select_items;
}

const listbuild = (istart:number, ilast:number, prefix: string) => {
  const items: string[] = [];
  for (let i = istart; i <= ilast; i++) {
    let d = "";
// sprintf?
    if (i < 10) {
         d = `${prefix}0${i}`;
    } else {
         d = `${prefix}${i}`;
       }
       items.push(d);
    }
     
  return items;
}
   
export const Items = ({ bucket, itemsetter } : ItemsProps) => {
//   console.log(`itemsetter is ${itemsetter}`);

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

   let items: string[] = [];
   if (bucket === 0) {
     const istart = 7;
     const ilast = 43;
     items = listbuild(istart, ilast, "gf");
   } else if (bucket == 1) {
     const istart = 7;
     const ilast = 33;
     items = listbuild(istart, ilast, "ff");
   } else if (bucket == 2) {
     const istart = 7;
     const ilast = 27;
     items = listbuild(istart, ilast, "2f");
   } else {
     console.log(`Bad bucket ${bucket}`);
     alert(`Bad bucket ${bucket}`);
   }
   const select_item_list: Select_type[] = items_select(items)

   return (
     <>
     <div id="itemPulldown">
       <label className="mb-0 font-weight-bold">Item</label>
         <Select options={select_item_list} onChange={(choice) => itemsetter(choice!.value)}/>
     </div>
     </>
   );
};

export default Items;

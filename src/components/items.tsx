import Select from 'react-select'

type Select_type = {
  value: string,
  label: string,
};

const item2select = (input: string): Select_type => {
  return {value: input, label: input};
}

{ /*
type ItemEmail = {
  item: string,
  email: string,
};

const item2itememail = (input: string): ItemEmail => {
  return {item: input, email: ""};
}

const items: string[] = [ "2f27", "2f26", "2f25", "2f24"];
console.log(items);

function emptyitems(items: string[]): ItemEmail[] {
  const eitems: ItemEmail[] = [];
  items.forEach(item => eitems.push(item2itememail(item)));
  console.log(eitems);
  return eitems;
}

const emptieditems = emptyitems(items)
console.log(emptieditems);

function items_select(items: string[]): Select_type[] {
  const select_items: Select_type[] = [];
  items.forEach(item => select_items.push(item2select(item)));
  console.log(select_items);
  return select_items;
}

const select_item_list = items_select(items)
console.log(select_item_list);
*/ }

const items_select = (items: string[]): Select_type[] => {
  const select_items: Select_type[] = [];
  items.forEach(item => select_items.push(item2select(item)));
  return select_items;
}

export interface ItemsProps {
  collection: number | null;
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
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
   
export const Items = ({ collection, itemsetter } : ItemsProps) => {
//   console.log(`itemsetter is ${itemsetter}`);

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

   let items: string[] = [];
   if (collection === 0) {
     const istart = 7;
     const ilast = 43;
     items = listbuild(istart, ilast, "gf");
   } else if (collection == 1) {
     const istart = 7;
     const ilast = 33;
     items = listbuild(istart, ilast, "ff");
   } else if (collection == 2) {
     const istart = 7;
     const ilast = 27;
     items = listbuild(istart, ilast, "2f");
   } else {
     console.log(`Bad collection ${collection}`);
     alert(`Bad collection ${collection}`);
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

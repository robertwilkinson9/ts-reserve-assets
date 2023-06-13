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

const listbuild = (istart:number, ilast:number, prefix: string | undefined, suffix?: string | undefined) => {
  const items: string[] = [];
  for (let i = istart; i <= ilast; i++) {
    let d = "";
// sprintf?
    if (i < 10) { // XXX and in general??
         d = `0${i}`;
    } else {
         d = `${i}`;
    }
    if (prefix !== undefined) {
      d = `${prefix}${d}`;
    }
    if (suffix !== undefined) {
      d = `${d}${suffix}`;
    }
    items.push(d);
  }
  return items;
}
   
export const Items = ({ config, bucket, itemsetter } : ItemsProps) => {

  console.log(`ITEMS CONFIG.BUCKET_NAME is ${config.BUCKET_NAME}`);
  console.log(`ITEMS BUCKET is ${bucket}`);
  console.log(`ITEMS CONFIG.BUCKET SIZE is ${config.BUCKETS.length}`);
  console.log(`ITEMS CONFIG is`);
  console.log(config);

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

  let items: string[] = [];
  if (bucket !== null) {
    if (config.BUCKETS[bucket].items != undefined && config.BUCKETS[bucket].items?.length) {
      items = config.BUCKETS[bucket].items!;
    } else {
      items = listbuild(config.BUCKETS[bucket!].ifirst!, config.BUCKETS[bucket!].ilast!, config.BUCKETS[bucket!].prefix);
    }
  }
  const select_item_list: Select_type[] = items_select(items)

  const capitalizeFirstLetter = (name: string) => {return name.charAt(0).toUpperCase() + name.slice(1);}
  return (
    <>
    <div id="itemPulldown">
      <label className="mb-0 font-weight-bold">{capitalizeFirstLetter(config.ITEM_NAME)}</label>
        <Select options={select_item_list} onChange={(choice) => itemsetter(choice!.value)}/>
    </div>
    </>
  );
};

export default Items;

import Select from 'react-select'

import { ItemsProps, ItemData} from './interfaces';

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
   
export const Items = ({ config, bucket, bucket_items, itemsetter } : ItemsProps) => {
  if (bucket_items) {
    console.log("ITEMS BUCKET_ITEMS is ");
    console.log(bucket_items);
  }

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
    if (bucket_items) {
      const floor_items = bucket_items.filter((item) => {return bucket == item.bucket});
      console.log("ITEMS FLOOR_ITEMS is ");
      console.log(floor_items);
      if (floor_items) {
        const reserved_items = floor_items.map((x: ItemData) => {return x.item});
        console.log("ITEMS RESERVED_ITEMS is ");
        console.log(reserved_items);
      }
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

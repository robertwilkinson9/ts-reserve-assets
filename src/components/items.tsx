import Select from 'react-select'

import { ItemsProps, ItemData, Select_type} from './interfaces';

const items_select = (items: string[]): Select_type[] => {
  const select_items: Select_type[] = items.map(item => {return {value: item, label: item};});
  return select_items;
}

const listbuild = (istart:number, ilast:number, prefix: string | undefined, suffix?: string | undefined) => {
  const items: string[] = [];
  for (let i = istart; i <= ilast; i++) {
    let d = i.toString().padStart(ilast.toString().length, '0');

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
  let items: string[] = [];
  if (bucket !== null) {
    if (config.BUCKETS[bucket].items != undefined && config.BUCKETS[bucket].items?.length) {
      items = config.BUCKETS[bucket].items!;
    } else {
      items = listbuild(config.BUCKETS[bucket!].ifirst!, config.BUCKETS[bucket!].ilast!, config.BUCKETS[bucket!].prefix);
    }
    if (bucket_items) {
      const floor_items = bucket_items.filter((item) => {return bucket == item.bucket});
      if (floor_items) {
        const reserved_items = floor_items.map((x: ItemData) => {return x.item});
        items = items.filter(n => !reserved_items.includes(n)); // slow and simple set difference 
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

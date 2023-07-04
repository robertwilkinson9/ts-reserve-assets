import Select from 'react-select'

import { ItemsProps, Select_type} from './interfaces';

const items_select = (items: string[]): Select_type[] => {
  const select_items: Select_type[] = items.map(item => {return {value: item, label: item};});
  return select_items;
}

const listbuild = (istart:number | undefined, ilast:number | undefined, prefix: string | undefined, suffix?: string | undefined) => {
  const items: string[] = [];
  if (istart != undefined && ilast != undefined) {
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
  }
  return items;
}
   
export const Items = ({ config, bucket, bucket_items, set_item } : ItemsProps) => {
  let items: string[] | undefined = [];

  if (bucket !== null) {
    if (config.BUCKETS[bucket].items) {
      items = config.BUCKETS[bucket].items;
    } else {
      if (config.BUCKETS[bucket].ifirst && config.BUCKETS[bucket].ilast) {
        items = listbuild(config.BUCKETS[bucket].ifirst, config.BUCKETS[bucket].ilast, config.BUCKETS[bucket].prefix);
      }
    }
    if (bucket_items) {
      const floor_items = bucket_items.filter(it => {return bucket == it.bucket});
      if (floor_items) {
        const item_key = config.ITEM_LABEL;
        const reserved_items = floor_items.map(x => {return x[item_key]});
        if (items) {
          items = items.filter(n => !reserved_items.includes(n)); // slow and simple set difference 
        }
      }
    }
  }

  if (items) {
    const select_item_list: Select_type[] = items_select(items)

    const key = `key__${bucket}`

    const capitalizeFirstLetter = (name: string) => {return name.charAt(0).toUpperCase() + name.slice(1);}
    return (
      <>
      <div id="itemPulldown">
        <label className="mb-0 font-weight-bold">{capitalizeFirstLetter(config.ITEM_NAME)}</label>
          <Select
            key={key}
            options={select_item_list}
            onChange={(choice) => choice ? set_item(choice.value) : ""}
          />
      </div>
      </>
    );
  } else {
    return(
    <>
    <h4>No SELECT items</h4>
    </>
  );

  }
};

export default Items;

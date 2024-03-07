/** 
* semantics - a bucket is a collection or container for items
* e.g. a room containing desks, the desks being the items
* the books by an author, the author is the bucket and the books the items
* the tables in the restaurant, the tables are the buckets, the bookable seats the items.

* these items are presented to the author as pull down lists once the bucket radio button is selected
* filter out those items currently booked at the time requested from those presented 
*/

import { BucketReadProps } from './interfaces';

import { listbuild } from './listbuild';

/**
*
* items are either listed in the config files as strings
* or else numeric, with the first and last in the config file, and the items computed
*
*/

export const get_items_from_config = ({config, bucket}: BucketReadProps): string[] | undefined => {
  let items: string[] | undefined = [];

  if ((bucket !== null) && config !== undefined && config.BUCKETS !== undefined && config.BUCKETS.length && (config.BUCKETS[bucket] !== undefined)) {
    if ('ITEMS' in config.BUCKETS[bucket]) {
      items = config.BUCKETS[bucket].ITEMS;
    } else {
      if (config.BUCKETS[bucket].IFIRST && config.BUCKETS[bucket].ILAST) {
        items = listbuild(config.BUCKETS[bucket].IFIRST, config.BUCKETS[bucket].ILAST, config.BUCKETS[bucket].PREFIX, config.BUCKETS[bucket].SUFFIX);
      }
    }
  }
  return items;
}
 
export default get_items_from_config;

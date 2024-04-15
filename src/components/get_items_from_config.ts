import { BucketReadProps } from './interfaces';

import { listbuild } from './listbuild';

/**
* items are either listed in the config files as strings
* or else numeric, with the first and last in the config file, and the items computed
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

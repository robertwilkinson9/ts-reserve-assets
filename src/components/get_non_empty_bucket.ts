export const get_non_empty_bucket = (bucket: number, items_available: boolean []) => {
  if (items_available[bucket]) {return bucket;}

//      const next = (bucket + 1) % items_available.length;
// or just start at 0 and return the first available ...
  for (let i = 0; i < items_available.length; i++) {
    if (items_available[i]) {
      return i;
    }
  }
};

export default get_non_empty_bucket;

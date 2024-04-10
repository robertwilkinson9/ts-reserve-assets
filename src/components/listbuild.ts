/**
* listbuild can build a list from a start and last number and surround each with a prefix and suffix
*/

export const listbuild = (istart:number | undefined, ilast:number | undefined, prefix: string | undefined, suffix?: string | undefined) => {
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

export default listbuild;

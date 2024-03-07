export const overlap = (a: Date, b: Date, x: Date, y:Date) => {
  // a to b is one date range, x to y is another date range
  // we return true for overlap
  const before = (d1: Date, d2: Date) => {return d1 <= d2;}
  const after = (d1: Date, d2: Date) => {return d1 >= d2;}

  return ((after(a, x) && before(a, y)) ||
          (after(x, a) && before(y, a)) ||
          (after(b, x) && before(b, y)) ||
          (after(x, b) && before(y, b)) ||
          (after(x, a) && before(y, b)) ||
          (after(a, x) && before(b, y)));
};

export default overlap;

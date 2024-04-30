export const overlap = (a: Date, b: Date, x: Date, y:Date) => {
  // a to b is one date range, x to y is another date range
  // we return true for overlap
  const before = (d1: Date, d2: Date) => {return d1 <= d2;}
  const after = (d1: Date, d2: Date) => {return d1 >= d2;}

/*
implement the following : overlap is true for the following 6 cases
  ---x--a--y
  ---a--x--b
  ---x--b--y
  ---a--y--b
  a--x--y--b
  x--a--b--y
*/

  const result = ((after(a, x) && before(a, y)) ||
                  (after(x, a) && before(x, b)) ||
                  (after(b, x) && before(b, y)) ||
                  (after(y, a) && before(y, b)) ||
                  (after(x, a) && before(y, b)) ||
                  (after(a, x) && before(b, y)));
  return result
};

export default overlap;

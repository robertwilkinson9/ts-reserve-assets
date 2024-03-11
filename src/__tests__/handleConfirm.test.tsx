import { describe, it } from 'vitest';
import { handleConfirm } from '../components/handleConfirm';

console.log(`in handleConfirm test and handleConfirm is ${typeof(handleConfirm)}`);

const url = "https://www.fourtheye.org";
/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */
console.log("TYPE OF NULL SETTER is ");
console.log(typeof(null_setter));

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    handleConfirm(url, null_setter);
  });
});

import { describe, it } from 'vitest';
import { handleCancel } from '../components/handleCancel';

/*
const echo_setter = (x) => {console.log(`ECHO {x}`);}
console.log("TYPE OF ECHO SETTER is ");
console.log(typeof(echo_setter));
*/

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */
console.log("TYPE OF NULL SETTER is ");
console.log(typeof(null_setter));

describe('Cancel main page correctly', async () => {
    it('Cancel render the page correctly', async () => {
      handleCancel(null_setter);
//      handleCancel({ null_setter });
//      handleCancel(echo_setter);
    });
});

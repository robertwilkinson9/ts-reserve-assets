import { describe, it } from 'vitest';
import { handleCancel } from '../components/handleCancel';

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

describe('Cancel main page correctly', async () => {
    it('Cancel render the page correctly', async () => {
      handleCancel(null_setter);
    });
});

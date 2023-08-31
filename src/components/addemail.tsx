import { FormControl, FormLabel, FormHelperText, Input} from '@chakra-ui/react'

import { AddEmailProps } from './interfaces';

export const AddEmail = ({email, set_email} : AddEmailProps) =>{
  if (typeof(email) !== "string") {email = "";}

  console.log(`set_email is ${set_email}`);

  return (
    <>
      <div data-testid="emailaddress" id="emailaddress">
        <FormControl>
          <FormLabel data-testid='emailaddress_label' htmlFor='email' >Email address</FormLabel>
          <Input id='email' type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </>
  );
}

export default AddEmail;

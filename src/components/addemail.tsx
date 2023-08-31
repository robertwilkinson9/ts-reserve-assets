import { FormControl, FormLabel, FormHelperText, Input} from '@chakra-ui/react'

import { AddEmailProps } from './interfaces';

export const AddEmail = ({email, set_email} : AddEmailProps) =>{
  if (typeof(email) !== "string") {email = "";}

  return (
    <>
      <div data-testid="emailaddress" id="emailaddress">
        <FormControl>
          <FormLabel data-testid='emailaddress_label' htmlFor='email' >Email address</FormLabel>
{ /*
          <Input id='email' type='email' value=email ? {email} : "Email address"  onChange={(event) => set_email(event.target.value)} />;
*/ }
          email ? 
            <Input id='email' type='email' value={email} onChange={(event) => set_email(event.target.value)} /> :
            <Input id='email' type='email' value="Email address" onChange={(event) => set_email(event.target.value)} />;
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </>
  );
}

export default AddEmail;

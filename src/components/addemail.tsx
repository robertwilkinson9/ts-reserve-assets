import { Box, FormControl, FormLabel, FormHelperText, Input} from '@chakra-ui/react'

import { AddEmailProps } from './interfaces';

export const AddEmail = ({email, set_email} : AddEmailProps) =>{
  if (typeof(email) !== "string") {email = "";}

  return (
    <>
      <Box>
      <div data-testid="emailaddress" id="emailaddress">
        <FormControl>
          <FormLabel data-testid='emailaddress_label' htmlFor='email' >Email address</FormLabel>
          <Input 
             id='email'
             type='email'
             data-testid="emailaddressinput"
             placeholder='enter Email address'
             _placeholder={{ opacity: 1, color: 'gray.500' }}
             value={email}
             onChange={(event) => set_email(event.target.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
      </Box>
    </>
  );
}

export default AddEmail;

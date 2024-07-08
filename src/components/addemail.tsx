import { Box, FormControl, FormLabel, FormHelperText, Input} from '@chakra-ui/react'

import { AddEmailProps } from './interfaces';

export const AddEmail = ({email, set_email, helper_text, placeholder_text} : AddEmailProps) =>{
  if (typeof(email) !== "string") {email = "";}

  return (
    <>
      <Box>
      <div data-testid="emailaddress" id="emailaddress">
        <FormControl>
          <FormLabel data-testid='emailaddress_label' htmlFor='email' >Email address</FormLabel>
          <Input 
             data-testid='email_input'
             id='email'
             type='email'
             placeholder={placeholder_text}
             _placeholder={{ opacity: 1, color: 'gray.500' }}
             value={email}
             onChange={(event) => set_email(event.target.value)} />
          <FormHelperText>{helper_text}</FormHelperText>
        </FormControl>
      </div>
      </Box>
    </>
  );
}

export default AddEmail;

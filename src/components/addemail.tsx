import Form from 'react-bootstrap/Form';

import { AddEmailProps } from './interfaces';

export const AddEmail = ({email, emailsetter} : AddEmailProps) =>{
  if (typeof(email) !== "string") {email = "";}

  return (
    <>
      <div id="emailaddress">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => emailsetter(e.target.value)} />
      </Form.Group>
      </div>
    </>
  );
}

export default AddEmail;

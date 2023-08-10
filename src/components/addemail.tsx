import Form from 'react-bootstrap/Form';

import { AddEmailProps } from './interfaces';

export const AddEmail = ({email, set_email} : AddEmailProps) =>{
  if (typeof(email) !== "string") {email = "";}

  return (
    <>
      <div data-testid="emailaddress" id="emailaddress">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label data-testid="emailaddress_label" >Email address</Form.Label>
        <Form.Control data-testid="emailaddress_control"  type="email" placeholder="Enter email" value={email} onChange={(e) => set_email(e.target.value)} />
      </Form.Group>
      </div>
    </>
  );
}

export default AddEmail;

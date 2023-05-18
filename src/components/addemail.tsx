import Form from 'react-bootstrap/Form';

export interface AddEmailProps {
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AddEmail = ({email, emailsetter} : AddEmailProps) =>{
  console.log("EMAILSETTER is")
  console.log(emailsetter)

  if (typeof(email) !== "string") {email = "";}

  return (
    <>
      <div id="emailaddress">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text
          className="text-muted"
        >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
{ /*
      <label>Enter your email:
        <input 
          type="text"
          value={email}
          onChange={(e) => emailsetter(e.target.value)}
        />
      </label>
*/ }
      </div>
    </>
  );
}

export default AddEmail;

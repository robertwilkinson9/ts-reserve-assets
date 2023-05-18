export interface AddEmailProps {
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AddEmail = ({email, emailsetter} : AddEmailProps) =>{
  console.log("EMAILSETTER is")
  console.log(emailsetter)

{ /*
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("PRINT event.target ");
    console.log("event -> ", event);
    console.log("event.currentTarget -> ", event.currentTarget);
    const submit_value = (event.currentTarget.elements[3] as HTMLInputElement).value; // 4th element we want the value of the submit button
    console.log("SUBMIT_VALUE -> ", submit_value);
//    console.log(`EMAIL you entered was: ${email}`)
//    alert("EMAIL you entered")
  }
*/ }

  if (typeof(email) !== "string") {email = "";}

  return (
    <>
{ /*
    <form onSubmit={handleSubmit} id="emailForm">
*/ }
      <label>Enter your email:
        <input 
          type="text"
          value={email}
          onChange={(e) => emailsetter(e.target.value)}
        />
      </label>
{ /*
      <button type="submit" value="submit" form="emailForm" >Book Desk</button>
    </form>
*/ }
    </>
  );
}

export default AddEmail;

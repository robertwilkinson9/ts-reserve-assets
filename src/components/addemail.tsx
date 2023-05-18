import { useState } from "react";

// useForm functional component
export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };


    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
        await callback(); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };
}

export interface AddEmailProps {
  setter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AddEmail = ({setter} : AddEmailProps) =>{
    console.log("SETTER is")
    console.log(setter)

 // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    console.log("Values from form are ");
    console.log(values);

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
    }

    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit}>
        <div>
            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />
            <button type='submit'>Book Desk</button>
        </div>
        </form>
    );
}

export default AddEmail;

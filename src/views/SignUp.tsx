import {useState} from "react";
import { signup } from "../library/api";
type Email = string;
type Password = string;

type Values = {
  email: Email,
  password: Password,
  password2: Password
};
const inicialValues : Values = {
    email: "",
    password: "",
    password2: "",
};


function SignUp() {
    const [values, setValues] = useState(inicialValues);
  
  const handleInput = (event:React.ChangeEvent<HTMLInputElement>):void => { 
      event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    event.preventDefault();
    const newUser = values;
    if (newUser.password !== newUser.password2){
      console.error("password don't match")
    }else{
      signup(values.email, values.password);
      setValues(inicialValues);
    }
  };
  
  return (
    <div>
         <h1>SignUp</h1>
      <form>
        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <input type="password" placeholder="confirm your password" onChange={handleInput} value={values.password2} name="password2" />
        <button onClick={(e)=> handlePost(e)} type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default SignUp
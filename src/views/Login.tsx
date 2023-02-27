import { useState } from 'react';
import { login } from "../library/api";
type Email = string
type Password = string

type Values = {
  email: Email,
  password: Password,
}

const inicialValues: Values = {
  email: "",
  password: ""
};
function Login() {

  const [values, setValues] = useState(inicialValues);
  const handleInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
      event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = (event:any):void => {
    event.preventDefault();
    login(values.email, values.password);
    setValues(inicialValues);
  };
  return (
    <div>
      
      <h1>Login</h1>
      <form>
        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <button onClick={handlePost} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login
import { useState } from 'react';
import { login } from "../library/api";

const inicialValues = {
  email: "",
  password: ""
};
function Login() {

  const [values, setValues] = useState(inicialValues);
  const handleInput = (event) => {
      event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = (event) => {
    event.preventDefault();
    console.log(values)
    login(values.email, values.password);
    setValues(inicialValues);
  };
  return (
    <div>
      
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <button onClick={handlePost} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login
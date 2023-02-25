import React from 'react';
import {useState} from "react"
import { register } from "../library/api"

const inicialValues = {
    email: "",
    password: "",
    password2: "",
}

function Register() {
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
    const newUser = values;
    if (newUser.password !== newUser.password2){
      console.error("password don't match")
    }else{
      register(values.email, values.password);
      setValues(inicialValues);
    }
  };
  
  return (
    <div>
         <h1>Register</h1>
      <form>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <input type="password" placeholder="confirm your password" onChange={handleInput} value={values.password2} name="password2" />
        <button onClick={handlePost} type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
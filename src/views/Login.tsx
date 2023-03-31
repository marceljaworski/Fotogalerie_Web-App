import { useState, useEffect  } from 'react';
import { login } from "../library/api";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


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
  const navigate = useNavigate()
  const loggedInCookie = Cookies.get("loggedIn")
  useEffect(()=> {
    if(loggedInCookie)
      navigate("/")
  })
    
  const handleInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
      event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    event.preventDefault();
    login(values.email, values.password);
    setValues(inicialValues);
  };
      
  return (
    <div>
      {/* <Helmet>
        <title>-login</title>
      </Helmet> */}
      
      <h1>Login</h1>
      <form>
        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <button onClick={(e)=> handlePost(e)} type="submit">Log In</button>
      </form>
      <Link to="/signup">No account yet? Join Now</Link>
    </div>
  );
};

export default Login
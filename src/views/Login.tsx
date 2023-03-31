import { useState, useEffect  } from 'react';
import { login } from "../library/api";
import { Link } from "react-router-dom";
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

  const [loggedInUser, setLoggedInUser] = useState("")
  const [values, setValues] = useState(inicialValues);
  console.log(values)
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
    
    // navigate("/")
  };
  // const navigate = useNavigate()

  useEffect(()=> {
      const loggedInCookie = Cookies.get("loggedIn")
      if(loggedInCookie)
          setLoggedInUser(loggedInCookie)
        }, [])
  // useEffect(()=>{
  //   if(loggedInUser) navigate("/")
  // }, [setLoggedInUser])
        
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
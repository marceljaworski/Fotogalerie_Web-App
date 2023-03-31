import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Albums from "./views/Albums";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import NoPage from "./views/NoPage";

function App() {



        
  return (
    <div className="App">
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App

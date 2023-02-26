import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Albums from "./views/Albums";
import Login from "./views/Login";
import Register from "./views/Register";
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
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App

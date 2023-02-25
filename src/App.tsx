import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Albums from "./views/Albums";
import Contact from "./views/Contact";
import NoPage from "./views/NoPage";

function App() {


  return (
    <div className="App">
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App

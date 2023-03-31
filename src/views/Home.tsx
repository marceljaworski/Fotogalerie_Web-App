import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getAll } from "../library/api";
import { useState, useEffect } from "react";
import Cookies from "js-cookie"
import  Photocard  from "../components/Photocard"
interface Photo {
  id : string;
  title: string;
  artist: string;
  year: number;
  url: string;
  price: number;
  
}

const photos:Array <Photo> = await getAll("photos");


function Home() {
  const [loggedInUser, setLoggedInUser] = useState("")
  const navigate = useNavigate()

  useEffect(()=> {
      const loggedInCookie = Cookies.get("loggedIn")
      if(!loggedInCookie) return navigate("/login")
      if(loggedInCookie)
          setLoggedInUser(loggedInCookie)
  }, [])
        



  return (

    <main className='home-main__container'>
      <h1>My Foto Album</h1>
      <div className='home-galerie__container'>
        {photos.map((el, i) => (
          <Photocard key={i} image={el}/>
        ))}
      </div>

    </main>
  );
};

export default Home;
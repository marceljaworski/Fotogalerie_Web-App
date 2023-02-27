import React from 'react'
// import fotos from "..library/api";
interface Foto {
  id : string;
  title: string;
  artist: string;
  year: number;
  url: string;
  price: number;

}

export const fotos : Array<Foto> = [
  {
      id: "esfse234056520w3wsdmdobht",
      title: "Where the Light is",
      artist: "John Mayer",
      year: 2008,
      url: "https://images.unsplash.com/photo-1677074237984-2e41e51aee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      price: 22.95,
  },
  {
      id: "esfse234056520w3wsdmdobhf",
      title: "Haus am See",
      artist: "Peter Fox",
      year: 2008,
      url: "https://images.unsplash.com/photo-1676710122604-c04cc677f6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      price: 17.99,
  }
] 
function Home() {
  
  return (
    <div>
      <h1>My Foto Album</h1>
      <div className='card'>
        <img src={fotos[0].url} alt="" />

        <p>{fotos[0].artist}</p>
      </div>


    </div>
  );
};

export default Home;
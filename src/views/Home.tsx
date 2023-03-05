import React from 'react'
import { getAll } from "../library/api";
import  Photocard  from "../components/Photocard.tsx"
interface Photo {
  id : string;
  title: string;
  artist: string;
  year: number;
  url: string;
  price: number;
  
}

const photos:Array <Photo> = await getAll("photos");
console.log(photos)

function Home() {

  
  return (
    <div>
      <h1>My Foto Album</h1>
      {photos.map((el, i) => (
        <Photocard key={i} image={el}/>
      ))}


    </div>
  );
};

export default Home;
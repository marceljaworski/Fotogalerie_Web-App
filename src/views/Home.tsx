import React from 'react'
import { getAll } from "../library/api";
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
console.log(photos)

function Home() {

  
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
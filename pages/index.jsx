import Head from 'next/head'
import Image from 'next/image'

import HeaderCustom from '../components/header/header.component'
import Footer from '../components/footer/footer.component'

import { useState } from 'react'



const Home = () => {

  const [Joke, setJoke] = useState('');
  const [ImageUrl, setImageUrl] = useState('https://iili.io/HGlQ4f9.png');
 

  const handleClick = (e) => {
    e.preventDefault();
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);

      });
  }
  return (
    <div class=" w-full max-w-full">

      <Head>
        <title>CNG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div id="main_content_container" class="mx-auto h-screen">
        <HeaderCustom />
    
        <div id="main_content" class="mb-auto mx-auto md:my-20 grid grid-cols-1 border-solid border-8 border-black h- md:grid-cols-2 md:max-w-7xl">
          <div id="left_container" class=" bg-[url('../public/chuck_bg.png')]">
            <button onClick={handleClick} >
              <Image class="p-4"
                onMouseEnter={() => setImageUrl('https://iili.io/HGlQPUu.png')}
                onMouseLeave={() => setImageUrl('https://iili.io/HGlQ4f9.png')}
                onClick={() => setImageUrl('https://iili.io/HGlQ6le.png')}
                width="672" height="400" alt="Chuck Image"
                src={ImageUrl} />
            </button>
          </div>
          <div id="right_container" class="">
            <div id="joke_container" class="md:border-l-4 max-w-2xl mb-24 border-solid border-t-2 border-black p-5 h-full font-semibold font-monospace text-lg md:text-2xl align-middle text-black bg-white">
              <p>{Joke}</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>


    </div>
  )
}
export default Home;
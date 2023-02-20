import Head from 'next/head'
import Image from 'next/image'
import HeaderCustom from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
import styled from 'styled-components'
import { useState } from 'react'



const Home = () => {

  const [Joke, setJoke] = useState('');
  const [ImageUrl, setImageUrl] = useState('../public/default_chuck.png');
  const Button = styled.button``;

  const handleClick = (e) => {
    e.preventDefault();
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);

      });
  }
  return (
    <div class=" h-screen max-h-screen w-full bg-stone-600">

      <Head>
        <title>CNG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderCustom />
      <div if="main_content_container" class="mx-auto">
        <div id="main_content" class="md:grid-cols-2 md: w-fit mx-auto my-16  grid grid-cols-1  border-solid border-8 border-black h-auto">

          <div id="left_container" class="bg-[url('../public/chuck_bg.png')]">
            <button onClick={handleClick} >
              <Image class="p-4"
                onMouseEnter={() => setImageUrl('../public/hover_chuck.png')}
                onMouseLeave={() => setImageUrl('../public/default_chuck.png')}
                onClick={() => setImageUrl('../public/clicked_chuck.png')}
                width="512" height="512" alt="Chuck Image"
                src={ImageUrl} />
            </button>
          </div>

          <div id="right_container" class=" max-w-lg max-h-25">
            <div id="joke_container" class="border-solid border-l-4 border-black w-400px p-3 h-full font-semibold font-monospace text-xl text-black bg-white">
              <p>{Joke}</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />

    </div>
  )
}
export default Home;
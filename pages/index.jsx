import Head from 'next/head'
import Image from 'next/image'

import HeaderCustom from '../components/header/header.component'
import Footer from '../components/footer/footer.component'

import { useState } from 'react'


const Home = () => {

  const [Joke, setJoke] = useState('');
  // const [ImageUrl, setImageUrl] = useState('https://iili.io/HGlQ4f9.png');
 

  const handleClick = (e) => {
    
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
    
        <div id="main_content" class="w-full h-fit md:w-[1500px] md:h-[480px] mb-auto mx-auto grid grid-cols-1 md:grid-cols-2 border-solid border-8 border-black ">
         
            <button id="image_container" onClick={handleClick} class="p-1 pt-2 relative md:active:top-1 bg-cover bg-no-repeat bg-[url('../public/chuck_bg.png')] overflow-hidden">
              <div class="w-full h-[300px] md:h-full bg-contain bg-no-repeat	 bg-[url('https://iili.io/HGlQ4f9.png')] hover:bg-[url('https://iili.io/HGlQPUu.png')] active:bg-[url('https://iili.io/HGlQ6le.png')]">

              </div>
              {/* <Image class="p-1"
                onMouseEnter={() => setImageUrl('https://iili.io/HGlQPUu.png')}
                onMouseLeave={() => setImageUrl('https://iili.io/HGlQ4f9.png')}
                onClick={() => setImageUrl('https://iili.io/HGlQ6le.png')}
                width="672" height="400" alt="Chuck Image"
                src={ImageUrl} /> */}
            </button>
          
          <div id="joke_container" class="md:border-l-4 border-solid border-t-2 border-black p-5 overflow-hidden h-full font-semibold font-monospace text-lg md:text-2xl align-middle text-black bg-white">
              <p>{Joke}</p>
          </div>
        </div>

        <Footer />
      </div>


    </div>
  )
}
export default Home;

// dshfasdh jklfasdk jhfkj ashdkjd d
// aw d awd a d aw da w d dawd awd aw d aw d awd aw d aw d awd aw d 
// wad fhaskdhfkjas d hfkjlhaskdjh fkljahdfkl jhasdkjfasd
//  jfhkljsdhf kjasdkljfhk
// j asdhflkj asdhfk jhasdjkfha skdhfkljadhf kjlahsdkljf dawd a
// wd aw d aw d awd aw d aw d awd a
// w d wad fhaskdhfkjas d hfkjlhaskdjh fkljahdfkl jhasdkjfasd jfhkljsdhf kja
// sdkljfhkj asdhflkj asdhfk jhasdjkfha skdhfklj
// adhf kjlahsdkljfawd awd aw d 
// aw d awd aw d aw d awd aw d wad fhaskdhfkj
// as d hfkjlhaskdjh fkljahdfkl jhasdkjfasd jfhkljsdhf kjasdkljfhkj asd
// hflkj asdhfk jhasdjkfha s
// kdhfkljadhf kjlahsdkljfhasdkj f
// hadjhflkj
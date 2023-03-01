import { useState } from 'react';


const JokeGenerator = () => {
    const [Joke, setJoke] = useState('');
    const handleClick = (e) => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((res) => res.json())
            .then((data) => {
                setJoke(data.value);
            });
    }
    return (
        <div id="main_content" className="w-full h-fit md:w-[1500px] md:h-[480px] mb-auto mx-auto grid grid-cols-1 md:grid-cols-2 border-solid border-8 border-black ">
            <button id="image_container" onClick={handleClick} className="p-1 pt-2 relative md:active:top-1 bg-cover bg-no-repeat bg-[url('../public/chuck_bg.png')] overflow-hidden">
                <div className="w-full h-[280px] md:h-full bg-contain bg-no-repeat	 bg-[url('https://iili.io/HGlQ4f9.png')] hover:bg-[url('https://iili.io/HGlQPUu.png')] active:bg-[url('https://iili.io/HGlQ6le.png')]">
                </div>
            </button>
            <div id="joke_container" className="md:border-l-4 border-solid border-t-2 border-black p-5 overflow-hidden h-full font-semibold font-monospace text-lg md:text-2xl align-middle text-black bg-white">
                <p>{Joke}</p>
            </div>
        </div>
    )
}

export default JokeGenerator;
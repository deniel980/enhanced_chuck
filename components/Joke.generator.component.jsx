import { useState } from "react";

const JokeGenerator = () => {
  const [Joke, setJoke] = useState("");
  const handleClick = (e) => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
      });
  };
  return (
    <div
      id="main_content"
      className="mx-auto mb-auto grid h-fit w-full grid-cols-1 border-8 border-solid border-black md:h-[480px] md:w-[1500px] md:grid-cols-2 "
    >
      <button
        id="image_container"
        onClick={handleClick}
        className="relative overflow-hidden bg-[url('../public/chuck_bg.png')] bg-cover bg-no-repeat p-1 pt-2 md:active:top-1"
      >
        <div className="h-[280px] w-full bg-[url('https://iili.io/HGlQ4f9.png')] bg-contain bg-no-repeat	 hover:bg-[url('https://iili.io/HGlQPUu.png')] active:bg-[url('https://iili.io/HGlQ6le.png')] md:h-full"></div>
      </button>
      <div
        id="joke_container"
        className="h-full overflow-hidden border-t-2 border-solid border-black bg-white p-5 align-middle font-monospace text-lg font-semibold text-black md:border-l-4 md:text-2xl"
      >
        <p>{Joke}</p>
      </div>
    </div>
  );
};

export default JokeGenerator;

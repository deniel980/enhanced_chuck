import Head from "next/head";

import HeaderCustom from "../components/Header.component";
import Footer from "../components/Footer.component";
import JokeGenerator from "components/Joke.generator.component";


const Home = () => {
  return (
    <div className=" w-full max-w-full">
      <Head>
        <title>CNG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="main_container" className="mx-auto h-screen">
        <HeaderCustom />
        <JokeGenerator />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

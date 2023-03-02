import VisiterCounter from "components/visiters.counter.component";

const Footer = () => {
  return (
    <div className="h-26 bottom-0 grid w-full bg-black md:fixed">
      <div>
        <div className="my-5 mx-10 font-monospace text-xl text-white">
          <VisiterCounter></VisiterCounter>
        </div>
      </div>
    </div>
  );
};

export default Footer;

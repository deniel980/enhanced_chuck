import VisiterCounter from "components/visiters_counter/visiters_counter.component";

const Footer = () => {
    return (
        <div className="w-full h-26 bg-black grid md:fixed bottom-0">
            <div>
                <div className="text-white my-5 mx-10 font-monospace text-xl">
                    <VisiterCounter></VisiterCounter>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import VisiterCounter from "components/visiters_counter/visiters_counter.component";

const Footer = () => {
    
        return (
    
            <div class="md:w-full h-28 bg-black flex absolute bottom-0">
    
                <div>
    
                    <div class="text-white my-5 mx-10 font-monospace text-xl">
                    <VisiterCounter></VisiterCounter>

                    </div>
                </div>
            </div>
        )
                    
}


export default Footer;
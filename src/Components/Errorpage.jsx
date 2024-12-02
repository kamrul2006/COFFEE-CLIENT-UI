import { Link } from "react-router-dom";
import error from "../../public/404/404.gif"
const Errorpage = () => {
    return (
        <div className="flex flex-col items-center justify-center my-5">
            <img src={error} alt="404" className=" mx-auto w-1/2" />

            <Link to={"/"} className="mx-auto text-center">
                <button className="bg-green-500 rounded-full text-center py-2 hover:font-bold text-white px-7 mx-auto">Go To Home</button>
            </Link>


        </div>
    );
};

export default Errorpage;
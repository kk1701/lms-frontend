import { useNavigate } from "react-router-dom";

function Denied(){

    const navigate = useNavigate()

    return(
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white">403</h1>
            <div className="absolute bg-black text-white px-2 text-sm rounded rotate-12">
               Access Denied!
            </div>
            <button className="mt-5">
                <a onClick={() => navigate(-1)} className="relative inline-block text-sm font-medium text-[#FF6A3D] active:text-yellow-500 focus:outline-non">
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current rounded-md">Go Back</span>
                </a>
            </button>
        </div>
    );
}

export default Denied
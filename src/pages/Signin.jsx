import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import { login } from "../redux/slices/authSlice";

function Signin(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: ''
    })

    function handleUserInput(e){
        const { name, value } = e.target

        setSigninDetails({
            ...signinDetails,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault()
        console.log(signinDetails);

        if(!signinDetails.email || !signinDetails.password){
            toast.error('Please fill all the details!')
            return;
        }

        if(!isEmail(signinDetails.email)){
            toast.error("Invalid email!")
            return;
        }

        const response = await dispatch(login(signinDetails))
        console.log(response);

        if(response?.payload?.data){
            navigate('/')
        }

        setSigninDetails({
            email: '',
            password: '',
        })

    }

    return(
        <HomeLayout>
            <div className="flex overflow-x-auto align-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center items-center gap-4 rounded-lg text-white p-4 w-[35%]">
                    <h1 className="text-2xl text-center font-bold mb-5">Login Page</h1>
                    
                    <div className="flex flex-col gap-1 w-[70%]">
                        <label htmlFor="email" className="font-semibold" >Email</label>
                        <input 
                            required
                            type="email"
                            name="email"
                            onChange={handleUserInput}
                            value={signinDetails.email}
                            placeholder="Enter your email..."
                            id="email"
                            className="bg-transparent px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-[70%]">
                        <label htmlFor="password" className="font-semibold" >Password</label>
                        <input 
                            required
                            type="password"
                            name="password"
                            onChange={handleUserInput}
                            value={signinDetails.password}
                            placeholder="Enter your password..."
                            id="password"
                            className="bg-transparent px-2 py-1"
                        />
                    </div>

                    <button className="w-[40%] mt-8 bg-yellow-700 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 rounded-md font-semibold text-lg">
                        Sign In
                    </button>

                    <p className="text-center ">
                        Do not have an account? <Link to="/signup" className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signin;
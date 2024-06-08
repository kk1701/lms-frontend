import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { isEmail, isValidPassword } from "../helpers/regexMatcher";
import { createAccount } from "../redux/slices/authSlice";

function Signup(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signupDetails, setSignupDetails] = useState({
        email: '',
        fullName: '',
        password: '',
        avatar: ''
    })

    const [previewImage, setPreviewImage] = useState("")

    function handleUserInput(e){
        const { name, value } = e.target

        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }

    function handleImage(e){
        e.preventDefault()

        const uploadedImage = e.target.files[0]
        if(!uploadedImage){
            return;
        }

        setSignupDetails({
            ...signupDetails,
            avatar: uploadedImage
        })
        const fileReader = new FileReader()

        fileReader.readAsDataURL(uploadedImage)
        fileReader.addEventListener('load', function () {
            setPreviewImage(this.result)
        })
    }

    async function onFormSubmit(e){
        e.preventDefault()
        console.log(signupDetails);

        if(!signupDetails.email || !signupDetails.fullName || !signupDetails.password){
            toast.error('Please fill all the details!')
            return;
        }

        if(signupDetails.fullName.length < 5){
            toast.error("Name should be of atleast 5 characters.")
            return;
        }

        if(!isEmail(signupDetails.email)){
            toast.error("Invalid email!")
            return;
        }

        if(!isValidPassword(signupDetails.password)){
            toast.error("Invalid password provided, it should be 6 to 16 characters long with atleast a number and a special characters.")
            return;
        }

        const formData = new FormData()
        formData.append("fullName", signupDetails.fullName)
        formData.append("email", signupDetails.email)
        formData.append("password", signupDetails.password)
        formData.append("avatar", signupDetails.avatar)

        const response = await dispatch(createAccount(signupDetails))
        console.log(response);

        if(response?.payload?.data){
            navigate('/')
        }

        setSignupDetails({
            email: '',
            fullName: '',
            password: '',
            avatar: ''
        })

        setPreviewImage('')
    }

    return(
        <HomeLayout>
            <div className="flex overflow-x-auto align-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center items-center gap-4 rounded-lg text-white p-4 w-[35%]">
                    <h1 className="text-2xl text-center font-bold mb-5">Registration Page</h1>
                    <label htmlFor="image-uploads" className="cursor-pointer">
                        { previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto " src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto "/>
                        )}
                    </label>
                    <input 
                        type="file"
                        onChange={handleImage}
                        className="hidden"
                        name="image-uploads"
                        id="image-uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />

                    <div className="flex flex-col gap-1 w-[70%]">
                        <label htmlFor="fullName" className="font-semibold" >Name</label>
                        <input 
                            required
                            type="text"
                            onChange={handleUserInput}
                            value={signupDetails.fullName}
                            name="fullName"
                            placeholder="Enter your username..."
                            id="fullName"
                            className="bg-transparent px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-[70%]">
                        <label htmlFor="email" className="font-semibold" >Email</label>
                        <input 
                            required
                            type="email"
                            name="email"
                            onChange={handleUserInput}
                            value={signupDetails.email}
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
                            value={signupDetails.password}
                            placeholder="Enter your password..."
                            id="password"
                            className="bg-transparent px-2 py-1"
                        />
                    </div>

                    <button className="w-[40%] mt-8 bg-yellow-700 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 rounded-md font-semibold text-lg">
                        Create Account
                    </button>

                    <p className="text-center ">
                        Already have an account? <Link to="/login" className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signup;
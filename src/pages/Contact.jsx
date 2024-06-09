import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import axiosInstance from "../config/axiosInstance";

function Contact() {

    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleInputChange(e){
        const { name, value } = e.target
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error('All fields are required!')
            return;
        }

        if(!isEmail(userInput.email)){
            toast.error("Invalid email provided!")
            return;
        }

        try {
            const response = axiosInstance.post("/contact", userInput)
            toast.promise(response, {
                loading: 'Submitting your query..',
                success: 'Form submitted successfully!',
                error: 'Failed to submit the form.'
            })

            const responseData = await response;
            if(responseData?.data){
                setUserInput({
                    email: '',
                    name: '',
                    message: ''
                })
            }
        } catch (error) {
            toast.error("Operation failed..!")
        }
    }

    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form noValidate onSubmit={onFormSubmit} className="flex flex-col items-center justify-center gap-4 p-5 rounded-md text-white w-[22rem]">
                    <h1 className="text-3xl font-semibold mb-5">Contact Form</h1>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="font-semibold">
                            Name
                        </label>
                        <input
                            id="name"
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            placeholder="Enter your name.."
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            value={userInput.name}
                         />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className=" font-semibold">
                            Email
                        </label>
                        <input
                            id="email"
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            placeholder="Enter your email.."
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            value={userInput.email}
                         />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className=" font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            placeholder="Enter your message.."
                            type="text"
                            name="message"
                            onChange={handleInputChange}
                            value={userInput.message}
                         />
                    </div>
                    <button type="submit" className="w-[1/2] bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-md transition-all ease-in-out duration-300 font-semibold text-lg cursor:hover">
                        Submit
                    </button>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Contact
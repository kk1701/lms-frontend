import { useDispatch, useSelector } from "react-redux"
import HomeLayout from "../../layouts/HomeLayout"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { getUserData, updateProfile } from "../../redux/slices/authSlice"
import { BsPersonCircle } from "react-icons/bs"
import toast from "react-hot-toast"

function EditProfile(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data, setData] = useState({
        fullName: "",
        previewImage: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?.user?._id)
    })

    console.log(data.userId);

    function handleImageUpload(e){
        e.preventDefault()

        const uploadedImage = e.target.files[0]
        if(uploadedImage){
            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener("load", function (){
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    }

    function handleInputChange(e){
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault()

        if(!data.fullName || !data.avatar){
            toast.error("All fields are required!")
            return;
        }
        if(data.fullName.length < 5){
            toast.error("Name cannot be less than 5 characters!")
            return;
        }


        const formData = new FormData()
        formData.append("fullName", data.fullName)
        formData.append("avatar", data.avatar)
        // formData.append("fullName", data.fullName)
        console.log(data.userId);

        await dispatch(updateProfile([data.userId, formData]))
        // await dispatch(getUserData())

        navigate("/user/profile");
        // window.location.href = "/user/profile"
    }

    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh]">
                <form 
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold">Edit Profile</h1>

                    <label htmlFor="image-uploads" className="cursor-pointer">
                        {
                            data.previewImage ? (
                                <img 
                                    src={data.previewImage}
                                    className="w-28 h-28 rounded-full m-auto"
                                />
                            ) : (
                                <BsPersonCircle  className="w-28 h-28 rounded-full m-auto"/>
                            )
                        }
                    </label>
                    <input 
                        type="file"
                        onChange={handleImageUpload}
                        id="image-uploads"
                        name="image-uploads"
                        accept=".jpg, .png, .jpeg, .svg"
                        className="hidden"
                    />

                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="fullName" className="text-g font-semibold">
                            Full Name
                        </label>
                        <input 
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Enter your name.."
                            value={data.fullName}
                            onChange={handleInputChange}
                            className="bg-transparent px-2 py-1 border rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-1 bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md cursor-pointer text-lg "
                    >
                        Update Profile
                    </button>

                    <Link to='/user/profile'>
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-4 ">
                            Go back to profile
                        </p>
                    </Link>

                </form>
            </div>
        </HomeLayout>
    )
}

export default EditProfile
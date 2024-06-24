import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../../layouts/HomeLayout'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { cancelCourseBundle } from '../../redux/slices/razorpaySlice'
import { getUserData } from '../../redux/slices/authSlice'

function Profile(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData = useSelector(state => state?.auth?.data)

    // const parsedData = JSON.parse(userData)

    // console.log(userData.user.fullName);

    async function handleCancellation(e){
        toast("Initiating cancellation!")

        await dispatch(cancelCourseBundle())
        await dispatch(getUserData())

        toast.success("Cancellation successfull!")

        navigate("/")
    }


    
    return(
        <HomeLayout>
            <div className='min-h-[90vh] flex items-center justify-center'>
                <div className='mx-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <img 
                        src={userData?.user?.avatar?.secure_url}
                        className='w-40 m-auto rounded-full border border-black'
                    />
                    <h3 className='text-xl font-semibold text-center capitalize'>
                        {userData?.user?.fullName}
                    </h3>

                    <div className='grid grid-cols-2'>
                        <p>Email: </p> <p>{userData?.user?.email}</p> 
                        <p>Role: </p> <p>{userData?.user?.role}</p> 
                        <p>Subscription: </p> <p>{userData?.user?.subscription?.status === "active" ? "Actvie" : "Inactive"}</p> 
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                        <Link 
                            to="/changePassword"
                            className='w-[50%] px-3 py-1 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-lg font-semibold cursor-pointer text-center'
                        >
                            <button onClick={Navigate('/user/changePassowrd')}>
                                Change Password
                            </button>
                        </Link>
                        <Link 
                            to='/user/editProfile'
                            className='w-[50%] px-3 py-1 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-lg font-semibold cursor-pointer text-center'
                        >
                            <button onClick={Navigate('/user/editProfile')}>
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    
                    {userData?.user?.subscription?.status === "active" && (
                        <button onClick={handleCancellation} className='w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-lg font-semibold py-2 cursor-pointer text-center'>
                            Cancel Subscription
                        </button>
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default Profile
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../../layouts/HomeLayout'
import { Link } from 'react-router-dom'

function Profile(){

    const dispatch = useDispatch()

    const userData = useSelector(state => state?.auth?.data)

    const parsedData = JSON.parse(userData)

    console.log(parsedData.user.avatar);
    
    return(
        <HomeLayout>
            <div className='min-h-[90vh] flex items-center justify-center'>
                <div className='mx-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <img 
                        src={parsedData?.user?.avatar?.secure_url}
                        className='w-40 m-auto rounded-full border border-black'
                    />
                    <h3 className='text-xl font-semibold text-center capitalize'>
                        {parsedData.user.fullName}
                    </h3>

                    <div className='grid grid-cols-2'>
                        <p>Email: </p> <p>{parsedData?.user?.email}</p> 
                        <p>Role: </p> <p>{parsedData?.user?.role}</p> 
                        <p>Subscription: </p> <p>{parsedData?.user?.subscription?.status === "active" ? "Actvie" : "Inactive"}</p> 
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                        <Link 
                            to="/changePassword"
                            className='w-[50%] px-3 py-1 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-lg font-semibold cursor-pointer text-center'
                        >
                            <button>
                                Change Password
                            </button>
                        </Link>
                        <Link 
                            to="/user/editProfile"
                            className='w-[50%] px-3 py-1 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-lg font-semibold cursor-pointer text-center'
                        >
                            <button>
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    
                    {parsedData?.user?.subscription?.status === "active" && (
                        <button className='w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-lg font-semibold py-2 cursor-pointer text-center'>
                            Cancel Subscription
                        </button>
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default Profile
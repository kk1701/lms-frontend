import { FiMenu } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

import Footer from "../components/Footer"

function HomeLayout({ children }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)
    const role = useSelector((state) => state?.auth?.role)

    function changeWidth(){
        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = 'auto'
    }

    function hideDrawer(){
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked = false

        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = '0'
    }

    function onLogout(e){
        e.preventDefault()

        navigate('/')
    }

    return(
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={changeWidth} size={"32px"} className='font-bold text-white m-4' />
                    </label>
                </div>
                <div className='drawer-side w-0 '>
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className='menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative'>
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {isLoggedIn && role === "ADMIN" && (
                            <li>
                                <Link to="/admin/dashboard">
                                    Admin Dashboard
                                </Link>
                            </li>
                        )

                        }
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/courses">All courses</Link>
                        </li>

                        {!isLoggedIn ? (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center gap-3">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-1/2">
                                        <Link to="/signin">Login</Link>
                                    </button>
                                    <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2">
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center gap-3">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-1/2">
                                        <Link to="/user/profile">Profile</Link>
                                    </button>
                                    <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2">
                                        <Link onClick={onLogout}>Logout</Link>
                                    </button>
                                </div>
                            </li>
                        )

                        }
                    </ul>
                </div>
            </div>


            {children}

            <Footer />

        </div>
    )
} 

export default HomeLayout
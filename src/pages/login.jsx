import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateIsLoggedIn } from "../reduxTool/slice";
import { login } from "../apiService/allApi";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const [userDetails,setUserDetails]= useState({Email:"",Password:""})
     const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const successnotify = () => toast("Registration successfull!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            //  transition: {Bounce},
        })
        const errornotify = () => toast("Registration Failed! ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            //  transition: Bounce,
        })
    const handleLogin = async (e) => {
        e.preventDefault()
        if (userDetails.Email === '' || userDetails.Password === '') {
            toast.warning("Please fill in all fields", {
                position: "top-center",
                theme: "colored",
            })
            return
        }

        setIsLoading(true)
        try {
            const result = await login(userDetails)
            console.log(result)

            if (result.status === 200) {
                successnotify()
              
                const userCredentials = {
                   UserId: result.data.userDetails.userId,
                    Name: result.data.userDetails.FirstName,
                    email: result.data.userDetails.email,
                    password: result.data.userDetails.password,
                }
                localStorage.setItem("userCredentials", JSON.stringify(userCredentials))
                localStorage.setItem("token", JSON.stringify(result.data.token))

                dispatch(updateIsLoggedIn(true))
                navigate("/home")
            } else {
                errornotify()
            }
        } catch (error) {
            errornotify()
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (

        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}>
            <form onSubmit={handleLogin} className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Login</h2>

                {/* Username Input */}
                <div className="relative mb-6">
                    <input
                        type="email"
                        placeholder="Username"
                        value={userDetails.Email}
                        onChange={(e)=>setUserDetails({...userDetails,Email:e.target.value})}
                        required
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 bg-transparent text-gray-800 placeholder-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userDetails.Password}
                        onChange={(e)=>setUserDetails({...userDetails,Password:e.target.value})}
                        required
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 bg-transparent text-gray-800 placeholder-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex justify-between text-sm text-gray-800 mb-6">
                   <a href="forgotPassword" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-blue-700 font-bold py-3 rounded-full shadow-md transition mt-6"
                >Login</button>
            </form>
            <ToastContainer
        position="top-right" // or "bottom-left", "top-center", etc.
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
        />
        </div>

    )
}
export default Login
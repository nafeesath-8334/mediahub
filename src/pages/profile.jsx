import { useEffect, useState } from "react"

import { useNavigate } from "react-router"
import { getUser } from "../apiService/allApi"



const Profile = () => {
    
    const [user, setUser] = useState({})
    const [img, setImg] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    
    
    
    useEffect(() => {
        const fetchUserData = async () => {
      console.log("inside fetchuserdata")
            const userData = JSON.parse(localStorage.getItem("userCredentials"))
            if (userData && userData?.UserId) {
                try {
                    const userId = Number(userData?.UserId)
                    console.log("userId",userId)
                    const userDetails = await getUser(userId)
                    console.log("after getuser")
                    console.log("User details:", userDetails?.data?.data)
                    setUser(userDetails?.data?.data || {})
                    setImg(userDetails?.data?.data?.Image || "")
                } catch (error) {
                    console.error("Error fetching user details:", error)
                }
            }
        }
        
        fetchUserData()
      
    }, [])
    
    return (
    <>
   
     <div
  className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
>
  <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
    <div className="bg-gradient-to-r from-blue-500 to-pink-200 px-6 py-4 rounded-2xl mb-6">
      <h1 className="text-3xl font-bold text-white text-center">My Profile</h1>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
      {/* Profile Image */}
      <div className="relative">
        <div className="h-36 w-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
          {img ? (
            <img
              src={`http://localhost:3000${img}`}
              alt={user?.FirstName || "User"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* User Details */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.FirstName || "User Name"}
        </h2>
        <p className="text-gray-600 mb-2">{user?.Email || "Email"}</p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
          <button
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition shadow-md"
            onClick={() => navigate("/editProfile", { state: { user } })}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        
        
        </>
        
       
    )
}

export default Profile
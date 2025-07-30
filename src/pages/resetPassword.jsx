import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../apiService/allApi";


const ResetPassword = () => {
    const { token } = useParams(); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const navigate=useNavigate()
  const notifySuccess = () => toast.success("Password reset successful!");
  const notifyError = (msg) => toast.error(msg || "Password reset failed.");
console.log("1")
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("2")
console.log(password)
    if (!password || !confirmPassword) {
      return notifyError("Please fill in all fields.");
    }

    if (password !== confirmPassword) {
      return notifyError("Passwords do not match.");
    }

    try {
      const result = await resetPassword(token, {Password:password });
      if (result.status === 200) {
        notifySuccess();
        navigate("/login")
      } else {
        notifyError("Reset failed.");
      }
    } catch (error) {
      notifyError("Something went wrong.");
    }
  };


  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat font-['Poppins',sans-serif]"
      style={{ backgroundImage: 'url("/pexels-jplenio-1103970.jpg")' }}>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-8">
        <form onSubmit={handleSubmit}  className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Reset Your Password
          </h3>
          <p className="text-center text-sm text-gray-600 mb-6">
            Enter your new password below
          </p>

          {/* New Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
           <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
             Reset
          </button> 
        </form>
      </div>
    </div>
  )
}
export default ResetPassword

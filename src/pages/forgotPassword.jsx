import { useState } from "react";
import { getforgotpswd } from "../apiService/allApi";
import { toast } from "react-toastify";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
   const notifySuccess = () => toast.success("check your email....!");
    const notifyError = (msg) => toast.error(msg || "reset failed!....");
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const result = await getforgotpswd({ Email:email });
              if (result.status === 200) {
                notifySuccess()
                 
                 
                  
              } else {
                  notifyError()
              }
          } catch (error) {
             notifyError()
          }
      };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4" style={{ backgroundImage: 'url("/pexels-jplenio-1103970.jpg")' }}>
      <form className="w-full max-w-md bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-2">Forgot Password?</h3>
        <p className="text-sm text-center text-gray-700 mb-6">
          Enter your email below, and we'll send you a reset link.
        </p>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={handleSubmit}
        >
          Send Reset Link
        </button>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-700">
            Remembered your password?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Back to login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

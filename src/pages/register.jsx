
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../apiService/allApi";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Register = () => {
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(`FirstName: ${userData.FirstName}`);
    // alert("Registered successfully");

    try {
      const result = await register(userData);
      if (result.status === 201) {
        successnotify()
        navigate("/login");
      }
    } catch (error) {
     errornotify()
      return error;
    }
  };

  return (
    <>
    <Navbar/>
     <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat font-['Poppins',sans-serif]"
       style={{ backgroundImage: 'url("/pexels-jplenio-1103970.jpg")' }}>
      {/* <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat font-['Poppins',sans-serif] z-5"> */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Register</h2>

          <div className="mb-6 flex items-center">
            <label className="w-1/3 text-sm font-semibold text-gray-900 text-right pr-4">First Name</label>
            <input
              type="text"
              value={userData.FirstName}
              onChange={(e) =>
                setUserData({ ...userData, FirstName: e.target.value })
              }
              placeholder="First Name"
              required
              className="flex-1 px-4 py-3 border border-gray-800 text-blue-900 rounded-lg placeholder-orange-600 outline-none"
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="w-1/3 text-sm font-semibold text-gray-900 text-right pr-4">Last Name</label>
            <input
               type="text"
              value={userData.LastName}
               onChange={(e) =>
                 setUserData({ ...userData, LastName: e.target.value })
               }
              placeholder="Last Name"
              required
              className="flex-1 px-4 py-3 border border-gray-800 text-blue-900 rounded-lg placeholder-orange-600 outline-none"
             />
       </div>

          <div className="mb-6 flex items-center">
            <label className="w-1/3 text-sm font-semibold text-gray-900 text-right pr-4">Email</label>
             <input
              type="email"
              value={userData.Email}
              onChange={(e) =>
                setUserData({ ...userData, Email: e.target.value })
              }
             placeholder="Email"
              required
              className="flex-1 px-4 py-3 border border-gray-800 text-blue-900 rounded-lg placeholder-orange-600 outline-none"
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="w-1/3 text-sm font-semibold text-gray-900 text-right pr-4">Password</label>
            <input
              type="password"
              value={userData.Password}
              onChange={(e) =>
                setUserData({ ...userData, Password: e.target.value })
              }
              placeholder="Password"
              required
              className="flex-1 px-4 py-3 border border-gray-800 text-blue-900 rounded-lg placeholder-orange-600 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-blue-700 font-bold py-3 rounded-full shadow-md transition mt-6"
          >
            Register
          </button>
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
    <Footer/></>
   
    // </div>
  );
 };

 export default Register;


  
     
             
           

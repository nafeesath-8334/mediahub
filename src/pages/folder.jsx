
import { use, useEffect, useState } from "react";
import { addFolder, getBokmrks, getFolder } from "../apiService/allApi";
import { toast } from "react-toastify";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";


const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({
    folderName: "",
    userId: "",
  });
   const token = JSON.parse(localStorage.getItem("token"));
      const headers = {
        // "content-type": "application/json",
        authorization: `Bearer ${token}`,
         }
 const notifySuccess = () => toast.success("added folder....!");
    const notifyError = (msg) => toast.error(msg || " failed!!!....");
  const navigate=useNavigate()

  useEffect(() => {
    const fetchUserAndFolders = async () => {
      const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
      if (storedUser && storedUser.UserId) {
        const userId = Number(storedUser.UserId);
        setUserData({ userId });
        setFolderData((prev) => ({ ...prev, userId }));
        
      
        try {
          const result = await getFolder(userId,headers);
          setFolders(result.data.data || []);
        } catch (err) {
          console.error("Error fetching folders:", err);
        }
      }
    };

    fetchUserAndFolders();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      
      const res = await addFolder(folderData,headers)
      if (res.status === 201) {
      
        alert("Folder added successfully");
        setFolders((prev) => [...prev, { ...folderData }]);
        setFolderData((prev) => ({ ...prev, folderName: "" }));
          notifySuccess()
          navigate("/folderList")
      } else {
        alert("Failed to add folder");
        notifyError()
      }
    } catch (err) {
      console.error("Error to add:", err);
      alert("Failed to add folder.");
      notifyError()
    }
  };

  

  return (
    <>
    <Navbar/>
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: 'url("/pexels-jplenio-1103970.jpg")' }}
    >
      {/* Folder Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl mb-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Folder</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Folder Name
          </label>
          <input
            type="text"
            placeholder="Enter folder name"
            value={folderData.folderName}
            onChange={(e) =>
              setFolderData({ ...folderData, folderName: e.target.value })
            }
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
        >
          Create Folder
        </button>
      </form>

      
      
      
       
      
      
      


    </div>
    
    <Footer/></>
    
  );
};

export default Folder;


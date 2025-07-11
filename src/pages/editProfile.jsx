import { useState, useEffect } from "react";
import { CiCamera } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";


const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(user?.Image ? `http://localhost:3000${user.Image}` : null);

  const [userData, setUserData] = useState({
    userId: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        userId: user.userId,
        FirstName: user.FirstName || "",
        LastName: user.LastName || "",
        Email: user.Email || "",
        Password: user.Password || "",
      });
    }
  }, [user]);

  const handleImage = (e) => {
    const selectedImg = e.target.files[0];
    if (selectedImg) {
      setImg(selectedImg);
      setPreviewImg(URL.createObjectURL(selectedImg));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      if (img) formData.append("img", img);
      formData.append("FirstName", userData.FirstName);
      formData.append("LastName", userData.LastName);

      const token = JSON.parse(localStorage.getItem("token"));
      const headers = {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      };

      const response = await editUserDetails(userData.userId, formData, headers);
      if (response.status === 200) {
        const successMessage = document.getElementById("success-message");
        if (successMessage) successMessage.classList.remove("hidden");
        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Edit Profile</h2>

        {/* Profile Section */}
        <div className="text-center mb-10">
          <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-gray-700 bg-gray-200">
            {previewImg ? (
              <img src={previewImg} alt="Profile Preview" className="w-full h-full object-cover" />
            ) : (
              <svg
                className="w-full h-full text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <label className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full cursor-pointer">
              <CiCamera className="w-5 h-5" />
              <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
            </label>
          </div>
          <p className="text-sm text-gray-800 mt-3">Click the camera icon to upload a new photo</p>
        </div>

        {/* Input Fields */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={userData.FirstName}
              onChange={(e) => setUserData({ ...userData, FirstName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={userData.LastName}
              onChange={(e) => setUserData({ ...userData, LastName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={userData.Email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={userData.Password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">To change password, use reset option</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 shadow hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-yellow-100 text-yellow-700 font-semibold shadow"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

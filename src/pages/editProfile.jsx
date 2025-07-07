import { CiCamera } from "react-icons/ci";

const EditProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}>
      <form className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Edit Profile</h2>
    <div>
 
         
        {/* Profile Section */ }
  <div className="text-center mb-10">
    <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-gray-700 bg-gray-200">
      <img src="" alt="Profile Preview" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-500"
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
      <label className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full cursor-pointer">
        <CiCamera className="w-5 h-5" />
        <input type="file" accept="image/*" className="hidden" />
      </label>
    </div>
    <p className="text-sm text-gray-800 mt-3">
      Click the camera icon to upload a new photo
    </p>
  </div>

  {/* Input Fields */ }
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value="user@example.com"
            disabled
            className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          <small className="text-xs text-gray-700 mt-1 block">
            Email cannot be changed
          </small>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Password
          </label>
          <input
            type="password"
            value="password123"
            disabled
            className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          <small className="text-xs text-gray-700 mt-1 block">
            To change password, use reset option
          </small>
        </div>

  {/* Action Buttons */ }
  <div className="flex justify-end gap-4 mt-8">
    <button
      type="button"
      className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 shadow hover:bg-gray-300"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-6 py-2 rounded-md bg-yellow-100 text-yellow-700 font-semibold shadow "
    
    >
      Saving...
    </button>
  </div>
      </div >
    </form >
    </div >
    
  );
};

export default EditProfile;

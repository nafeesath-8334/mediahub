const Profile = () => {
  return (
     <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}>
            <form className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Profile</h2>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-6">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-700 bg-gray-200">
            <img
              src=""
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center space-y-2">
          <h5 className="text-lg font-medium text-gray-900">Name</h5>
          <h5 className="text-lg font-medium text-gray-900">Email</h5>
        </div>
      </form>
    </div>
  );
};

export default Profile;

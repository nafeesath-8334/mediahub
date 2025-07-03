const Folder = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}>
            <form className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Folder</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Folder Name</label>
          <input
            type="text"
            placeholder="Enter folder name"
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
  );
};

export default Folder;

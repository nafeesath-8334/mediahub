import { IoBookmarksSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 shadow-md bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <a href="/home" className="text-[2rem] font-semibold text-cyan-700 flex items-center space-x-1">
          <IoBookmarksSharp />
          <span className="ml-1">Hub</span>
        </a>
        <a href="/home" className="text-purple-800 font-medium hover:text-purple-500 transition">Home</a>
        <a href="/folder" className="text-purple-800 font-medium hover:text-purple-500 transition">Folders</a>
        <a href="/bookmark" className="text-purple-800 font-medium hover:text-purple-500 transition">Bookmarks</a>
      </div>

      {/* Center Section */}
      <div>
        <input
          type="text"
          placeholder="Search bookmarks or folders..."
          className="w-[300px] px-4 py-2 rounded-md border-none text-base focus:outline-none"
        /><button >
         <CiSearch />
        </button>
      </div>
<div className="flex items-center space-x-4">
        
        <a href="/login" className="text-black font-medium hover:text-white transition">
          login
        </a>
      </div>
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md transition">
          + Create
        </button>
        <a href="/login" className="text-black font-medium hover:text-white transition">
          Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

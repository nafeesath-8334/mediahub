import { IoBookmarksSharp } from "react-icons/io5";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateIsLoggedIn } from "../reduxTool/slice";
import { useDispatch, useSelector } from "react-redux";
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.mediahub.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(updateIsLoggedIn(!!token)); 
  }, [dispatch]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userCredentials");
    dispatch(updateIsLoggedIn(false));
    navigate("/home");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 shadow-md bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <Link to="/home" className="text-[2rem] font-semibold text-cyan-700 flex items-center space-x-1">
          <IoBookmarksSharp />
          <span className="ml-1">Hub</span>
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/home" className="text-purple-800 font-medium hover:text-purple-500 transition">Home</Link>
            <Link to="/folder" className="text-purple-800 font-medium hover:text-purple-500 transition">Folders</Link>
            <Link to="/bookmark" className="text-purple-800 font-medium hover:text-purple-500 transition">Bookmarks</Link>
          </>
        )}
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button onClick={logout} className="text-red-600 font-medium">Logout</button>
        ) : (
          <Link to="/login" className="text-green-600 font-medium">Login</Link>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/register')}
          className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-3 py-1.5 rounded transition"
        >
          Register <ImProfile />
        </button>
        <Link to="/profile" className="text-black font-medium hover:text-blue transition">
          <CgProfile />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

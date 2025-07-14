import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // to get bookmark data passed via navigate
import { toast } from "react-toastify";
import { editBokmark, getBokmrks, getFolder } from "../apiService/allApi";

const EditBokmrk = () => {
  const location = useLocation();
  const existingBookmark = location.state?.bookmark || {}; // get passed bookmark
const navigate=useNavigate()
  const [folders, setFolders] = useState([]);
  const [userData, setUserData] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  const [bookmarkData, setBookmarkData] = useState({
    bokmrkId: "",      // keep the id here
    folderId: "",
    userId: "",
    url: "",
    title: "",
    description: "",
    thumbnail: "",
  });

  const notifySuccess = () => toast.success("Successfully updated!");
  const notifyError = (msg) => toast.error(msg || "Update failed!");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
    if (storedUser?.UserId) {
      const userId = Number(storedUser.UserId);
      setUserData({ userId });
      setBookmarkData(prev => ({
        ...prev,
        userId,
        bokmrkId: existingBookmark.bokmrkId || "",
        folderId: existingBookmark.folderId || "",
        url: existingBookmark.url || "",
        title: existingBookmark.title || "",
        description: existingBookmark.description || "",
        thumbnail: existingBookmark.thumbnail || "",
      }));
    }
  }, [existingBookmark]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const res = await getFolder(userData.userId);
        setFolders(res.data.data || []);
      } catch (err) {
        console.error("Error fetching folders:", err);
      }
    };
    if (userData.userId) fetchFolders();
  }, [userData]);

  const handleEditBookmark = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const formData = new FormData();
      formData.append("folderId", bookmarkData.folderId);
      formData.append("userId", bookmarkData.userId);
      formData.append("url", bookmarkData.url);
      formData.append("title", bookmarkData.title);
      formData.append("description", bookmarkData.description);
      formData.append("thumbnail", bookmarkData.thumbnail); // this is just a string URL, so still okay

      const headers = {
         "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
        // do NOT set "Content-Type" manually!
      };

      const res = await editBokmark(bookmarkData.bokmrkId, formData, headers);


      // const token = JSON.parse(localStorage.getItem("token"));
      // const headers = {
      //   "Content-Type": "multipart/form-data",
      //   authorization: `Bearer ${token}`,
      // };
      // const res = await editBokmark(bookmarkData.bokmrkId, bookmarkData,headers);
      if (res.status === 200) {
        navigate('/folderList')
        notifySuccess();
      } else {
        notifyError("Could not update bookmark.");
      }
    } catch (err) {
      console.error("Error editing bookmark:", err);
      notifyError();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}>
      <form onSubmit={handleEditBookmark} className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Edit Bookmark</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Folder</label>
          <select
            value={bookmarkData.folderId}
            onChange={(e) => setBookmarkData({ ...bookmarkData, folderId: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">-- Select Folder --</option>
            {folders.map((folder) => (
              <option key={folder.folderId} value={folder.folderId}>{folder.folderName}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bookmark URL</label>
          <input
            type="url"
            value={bookmarkData.url}
            onChange={(e) => setBookmarkData({ ...bookmarkData, url: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={bookmarkData.title}
            onChange={(e) => setBookmarkData({ ...bookmarkData, title: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={bookmarkData.description}
            onChange={(e) => setBookmarkData({ ...bookmarkData, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
          <input
            type="text"
            value={bookmarkData.thumbnail}
            onChange={(e) => setBookmarkData({ ...bookmarkData, thumbnail: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition">
          Update Bookmark
        </button>
      </form>
    </div>
  );
};
export default EditBokmrk;

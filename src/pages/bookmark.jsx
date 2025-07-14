import { useEffect, useState } from "react"
import { addBokmrks, getBokmrks, getFolder } from "../apiService/allApi";
import { toast } from "react-toastify";

const Bookmark = () => {
  const [folders, setFolders] = useState([]);
  const [userData, setUserData] = useState({});
  // const [folderData, setFolderData] = useState({
  //   folderName: "",
  //   userId: "",
  // });

  const [bookmarkData, setBookmarkData] = useState({
    folderId: "",
    userId: "",
    bookmarkUrl: "",
    title: "",
    description: "",
    thumbnail: ""
  });
 const notifySuccess = () => toast.success("successfull....!");
    const notifyError = (msg) => toast.error(msg || " failed!....");
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    try {
      const res = await getBokmrks(userData.userId);
      console.log("Bookmarks API response:", res.data); // Debug
      setBookmarks(res.data.data); // ✅ Adjust based on actual structure
    } catch (err) {
      console.error("Error fetching bookmarks:", err);
    }
  };

  useEffect(() => {
    if (userData.userId) {
      fetchBookmarks();
    }
  }, [userData]);

  useEffect(() => {
    const fetchUserAndFolders = async () => {
      const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
      if (storedUser && storedUser.UserId) {
        const userId = Number(storedUser.UserId);
        setUserData({ userId });
        // setFolderData((prev) => ({ ...prev, userId }));
        setBookmarkData((prev) => ({ ...prev, userId }));

        try {
          const result = await getFolder(userId);
          setFolders(result.data.data || []);
        } catch (err) {
          console.error("Error fetching folders:", err);
        }
      }
    };

    fetchUserAndFolders();
  }, []);
  const handleAddBookmark = async (e) => {
    e.preventDefault();
    try {
      const { folderId, userId, bookmarkUrl, title, description, thumbnail } = bookmarkData;

      const data = {
        folderId,
        url: bookmarkUrl,
        title,
        description,
        thumbnail
      };

      const res = await addBokmrks(userId, data);

      if (res.status === 201) {
        alert("Bookmark added successfully!");
        notifySuccess()
        setBookmarkData((prev) => ({
          ...prev,
          bookmarkUrl: "",
          title: "",
          description: "",
          thumbnail: "",
        }));
        fetchBookmarks(); // ✅ Refresh bookmark list
      } else {
        alert("Failed to add bookmark.");notifyError()
      }
    } catch (error) {
      notifyError()
      console.error("Error adding bookmark:", error);
      alert("Error adding bookmark.");
    }
  };

return (
  <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
   >
    <form 
      onSubmit={handleAddBookmark}
      className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl mb-8"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Add Bookmark
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Folder
        </label>
        <select
          value={bookmarkData.folderId}
          onChange={(e) =>
            setBookmarkData({ ...bookmarkData, folderId: e.target.value })
          }
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Folder --</option>
          {folders.map((folder) => (
            <option key={folder.folderId} value={folder.folderId}>
              {folder.folderName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bookmark URL
        </label>
        <input
          type="url"
          placeholder="https://example.com"
          value={bookmarkData.bookmarkUrl}
          onChange={(e) =>
            setBookmarkData({ ...bookmarkData, bookmarkUrl: e.target.value })
          }
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          placeholder="Bookmark title"
          value={bookmarkData.title}
          onChange={(e) =>
            setBookmarkData({ ...bookmarkData, title: e.target.value })
          }
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Enter bookmark description"
          value={bookmarkData.description}
          onChange={(e) =>
            setBookmarkData({ ...bookmarkData, description: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Thumbnail URL
        </label>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={bookmarkData.thumbnail}
          onChange={(e) =>
            setBookmarkData({ ...bookmarkData, thumbnail: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
      >
        Add Bookmark
      </button>
    </form>
</div> 
)
}
export default Bookmark
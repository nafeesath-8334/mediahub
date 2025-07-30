import { useEffect, useState } from "react";
import {
  deleteBokmrk,
  deleteFolder,
  editFolder,
  getBokmrks,
  getFolder,
} from "../apiService/allApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaFolder, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const FolderList = () => {
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const [userData, setUserData] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [editingFolderId, setEditingFolderId] = useState(null);
  const [editedFolderName, setEditedFolderName] = useState("");

  const notifySuccess = () => toast.success("Successful!");
  const notifyError = (msg) => toast.error(msg || "Failed!");
const token = JSON.parse(localStorage.getItem("token"));
      const headers = {
        // "content-type": "application/json",
        authorization: `Bearer ${token}`,
         }
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
    if (storedUser?.UserId) {
      const userId = Number(storedUser.UserId);
      setUserData({ userId });

      const fetchData = async () => {
        try {
          const foldersRes = await getFolder(userId);
          setFolders(foldersRes?.data?.data || []);

          const bookmarksRes = await getBokmrks(userId);
          setBookmarks(bookmarksRes?.data?.data || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);

  const handleEditFolder = (folderId, folderName) => {
    setEditingFolderId(folderId);
    setEditedFolderName(folderName);
  };

  const handleSaveFolder = async (folderId) => {
    if (!editedFolderName.trim()) return;
    try {
      const res = await editFolder({
        folderId,
        folderName: editedFolderName,
        userId: userData.userId,
      });

      if (res?.data?.data) {
        setFolders((prev) =>
          prev.map((f) =>
            f.folderId === folderId ? { ...f, folderName: editedFolderName } : f
          )
        );
        setEditingFolderId(null);
        setEditedFolderName("");
        notifySuccess();
      }
    } catch (err) {
      console.error("Error updating folder:", err);
      notifyError();
    }
  };

  const handleDeleteFolder = async (folderId) => {
    try {
      const res = await deleteFolder({
        folderId,
        userId: userData.userId,
      });

      if (res?.data?.message) {
        setFolders((prev) => prev.filter((f) => f.folderId !== folderId));
        notifySuccess();
      } else {
        notifyError(res?.data?.message);
      }
    } catch (error) {
      console.error("Error deleting folder:", error);
      notifyError();
    }
  };

  const handleDeleteBookmark = async (bokmrkId) => {
    try {
      const res = await deleteBokmrk({ bokmrkId, userId: userData.userId });

      if (res?.data?.message) {
        setBookmarks((prev) => prev.filter((b) => b.bokmrkId !== bokmrkId));
        notifySuccess("Bookmark deleted successfully!");
      } else {
        notifyError("Failed to delete bookmark!");
      }
    } catch (error) {
      console.error("Error deleting bookmark:", error);
      notifyError("Failed to delete bookmark!");
    }
  };

  const extractYouTubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <>
    <Navbar />
     <div
  className="min-h-screen bg-cover bg-center py-8 px-4"
  style={{ backgroundImage: 'url("/pexels-jplenio-1103970.jpg")' }}
>
      <div className="max-w-4xl mx-auto space-y-6">
        {folders.map((folder) => (
          <div
            key={folder.folderId}
            className="bg-white rounded-2xl shadow p-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              {editingFolderId === folder.folderId ? (
                <input
                  className="border border-gray-300 px-3 py-2 rounded-lg w-full"
                  value={editedFolderName}
                  onChange={(e) => setEditedFolderName(e.target.value)}
                />
              ) : (
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaFolder className="text-yellow-500" />
                  {folder.folderName}
                </h3>
              )}
              <div className="flex items-center gap-2">
                {editingFolderId === folder.folderId ? (
                  <>
                    <button
                      onClick={() => handleSaveFolder(folder.folderId)}
                      className="text-green-600 hover:text-green-800"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingFolderId(null);
                        setEditedFolderName("");
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate("/Folder")}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <IoMdAdd className="text-blue-600" />
                    </button>
                    <button
                      onClick={() =>
                        handleEditFolder(folder.folderId, folder.folderName)
                      }
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <FaEdit className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteFolder(folder.folderId)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <MdDelete className="text-red-600" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {bookmarks.filter((bm) => bm.folderId === folder.folderId).length === 0 ? (
              <p className="text-gray-500 italic">No bookmarks in this folder.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarks
                  .filter((bm) => bm.folderId === folder.folderId)
                  .map((bm, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-3 rounded-xl shadow hover:shadow-md transition flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <a
                            href={bm.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-700 font-medium hover:underline"
                          >
                            <FaBookmark /> {bm.title}
                          </a>
                          <p className="text-gray-600 text-sm">{bm.description}</p>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => navigate("/Bookmark")}
                            className="p-1 hover:bg-gray-200 rounded-full"
                          >
                            <IoMdAdd className="text-blue-600" />
                          </button>
                          <button
                            onClick={() =>
                              navigate("/editBokmrk", { state: { bookmark: bm } })
                            }
                            className="p-1 hover:bg-gray-200 rounded-full"
                          >
                            <FaEdit className="text-blue-600" />
                          </button>
                          <button
                            onClick={() => handleDeleteBookmark(bm.bokmrkId)}
                            className="p-1 hover:bg-gray-200 rounded-full"
                          >
                            <MdDelete className="text-red-600" />
                          </button>
                        </div>
                      </div>
                      {bm.url && extractYouTubeId(bm.url) && (
                        <iframe
                          src={`https://www.youtube.com/embed/${extractYouTubeId(
                            bm.url
                          )}`}
                          width="100%"
                          height="150"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default FolderList;

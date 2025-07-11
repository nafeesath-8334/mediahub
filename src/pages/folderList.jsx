import { useEffect, useState } from "react";
import { deleteFolder, editFolder, getBokmrks, getFolder } from "../apiService/allApi";


const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [userData, setUserData] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  const [editingFolderId, setEditingFolderId] = useState(null);
  const [editedFolderName, setEditedFolderName] = useState("");

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
     const res = await editFolder({ folderId, folderName: editedFolderName, userId: userData.userId });

      if (res?.data?.data) {
        setFolders((prev) =>
          prev.map((f) => (f.folderId === folderId ? { ...f, folderName: editedFolderName } : f))
        );
        setEditingFolderId(null);
        setEditedFolderName("");
      }
    } catch (err) {
      console.error("Error updating folder:", err);
    }
  };

  const handleDeleteFolder = async (folderId) => {
  try {
    const res = await deleteFolder({
      folderId,
      userId: userData.userId
    });

    if (res?.data?.message) {
      setFolders(prev => prev.filter(f => f.folderId !== folderId));
    } else {
      console.error('Delete failed:', res?.data?.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error deleting folder:', error);
  }
};


  const handleEditBookmark = (bookmark) => {
    // Implement edit logic
  };

  const handleDeleteBookmark = (bookmark) => {
    // Implement delete logic
  };

  return (
    // <div
    //   className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
    //   style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
    // >
      <div className="w-full max-w-md space-y-4">
        {folders.map((folder) => (
          <div key={folder.folderId} className="bg-white/30 p-3 rounded-lg shadow">
            {editingFolderId === folder.folderId ? (
              <input
                className="border px-2 py-1 rounded w-full"
                value={editedFolderName}
                onChange={(e) => setEditedFolderName(e.target.value)}
              />
            ) : (
              <h3 className="font-semibold">📁 {folder.folderName}</h3>
            )}

            <div className="flex space-x-2 mt-2">
              {editingFolderId === folder.folderId ? (
                <>
                  <button onClick={() => handleSaveFolder(folder.folderId)} className="text-green-600 hover:underline">
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditingFolderId(null);
                      setEditedFolderName("");
                    }}
                    className="text-gray-600 hover:underline"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditFolder(folder.folderId, folder.folderName)} className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteFolder(folder.folderId)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 bg-white/40 rounded-xl p-2">
              {bookmarks.filter((bm) => bm.folderId === folder.folderId).length === 0 ? (
                <p className="text-sm text-gray-600">No bookmarks in this folder.</p>
              ) : (
                <ul className="space-y-2">
                  {bookmarks
                    .filter((bm) => bm.folderId === folder.folderId)
                    .map((bm, i) => (
                      <li key={i} className="p-2 bg-white/80 rounded shadow">
                        <div className="flex justify-between">
                          <div>
                            <a href={bm.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold">
                              {bm.title}
                            </a>
                            <p className="text-gray-700 text-sm">{bm.description}</p>
                            {bm.thumbnail && <h5>{bm.thumbnail}</h5>}
                          </div>
                          <div className="space-x-2 text-sm">
                            <button onClick={() => handleEditBookmark(bm)} className="text-blue-600 hover:underline">Edit</button>
                            <button onClick={() => handleDeleteBookmark(bm)} className="text-red-600 hover:underline">Delete</button>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default FolderList;

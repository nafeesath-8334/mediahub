
// import { useEffect, useState } from "react";
// import { addFolder, getBokmrks, getFolder } from "../apiService/allApi";
// import { addBokmrks } from "../apiService/allApi"; // Make sure this is imported
// import { data } from "autoprefixer";

// const Folder = () => {
//   const [folders, setFolders] = useState([]);
//   const [userData, setUserData] = useState({});

//   const [folderData, setFolderData] = useState({
//     folderName: "",
//     userId: "",
//   });

//   const [bookmarkData, setBookmarkData] = useState({
//     folderId: "",
//     userId: "",
//     bookmarkUrl: "",
//     title: "",
//     description: "",
//     thumbnail: ""
//   });
// const [bookmarks, setBookmarks] = useState([]);


// const fetchBookmarks = async () => {
//   try {
//     const res = await getBokmrks(userData.userId); // pass userId
//     setBookmarks(res.data); // adapt based on response structure
//   } catch (err) {
//     console.error("Error fetching bookmarks:", err);
//   }
// };

// useEffect(() => {
//   if (userData.userId) {
//     fetchBookmarks();
//   }
// }, [userData]);

//   useEffect(() => {
//     const fetchUserAndFolders = async () => {
//       const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
//       if (storedUser && storedUser.UserId) {
//         const userId = Number(storedUser.UserId);
//         setUserData({ userId });
//         setFolderData((prev) => ({ ...prev, userId }));
//         setBookmarkData((prev) => ({ ...prev, userId }));

//         try {
//           const result = await getFolder(userId);
//           setFolders(result.data.data || []);
//         } catch (err) {
//           console.error("Error fetching folders:", err);
//         }
//       }
//     };

//     fetchUserAndFolders();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("INSIDE HANDLE SUBMIT", folderData)
//       const res = await addFolder(folderData);
//       if (res.status === 201) {
//         alert("Folder added successfully");
//         setFolders((prev) => [...prev, { ...folderData }]);
//         setFolderData((prev) => ({ ...prev, folderName: "" }));
//       } else {
//         alert("Failed to add folder");
//       }
//     } catch (err) {
//       console.error("Error to add:", err);
//       alert("Failed to add folder.");
//     }
//   };

//   const handleAddBookmark = async (e) => {
//     e.preventDefault();
//     try {
//       const { folderId, userId, url, title, description, thumbnail } = bookmarkData;

//       // const userId = bookmarkData.userId
//       const data = {
//         "folderId": bookmarkData.folderId,

//         title,
//         url:bookmarkData.bookmarkUrl,
//         description,
//         thumbnail,

//       }
//       console.log("INSIDE HANDLE BOOKMARK", bookmarkData)
//       console.log("folderId", bookmarkData.folderId)
//       const res = await addBokmrks(userId, data)


//       if (res.status === 201) {
//         alert("Bookmark added successfully!");
//         setBookmarkData((prev) => ({
//           ...prev,
//           bookmarkUrl: "",
//           title: "",
//           description: "",
//           thumbnail: "",

//         }));
//         fetchBookmarks()
//       } else {
//         alert("Failed to add bookmark.");
//       }
//     } catch (error) {
//       console.error("Error adding bookmark:", error);
//       alert("Error adding bookmark.");
//     }
//   };

//   return (
//     <div
//       className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
//       style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
//     >
//       {/* Folder Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl mb-8"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//           Create Folder
//         </h2>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Folder Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter folder name"
//             value={folderData.folderName}
//             onChange={(e) =>
//               setFolderData({ ...folderData, folderName: e.target.value })
//             }
//             required
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
//         >
//           Create Folder
//         </button>
//       </form>

//       {/* Bookmark Form */}
//       <form
//         onSubmit={handleAddBookmark}
//         className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl mb-8"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
//           Add Bookmark
//         </h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Select Folder
//           </label>
//           <select
//             value={bookmarkData.folderId}
//             onChange={(e) =>
//               setBookmarkData({ ...bookmarkData, folderId: e.target.value })
//             }
//             required
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">-- Select Folder --</option>
//             {folders.map((folder) => (
//               <option key={folder.folderId} value={folder.folderId}>
//                 {folder.folderName}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Bookmark URL
//           </label>
//           <input
//             type="url"
//             placeholder="https://example.com"
//             value={bookmarkData.bookmarkUrl}
//             onChange={(e) =>
//               setBookmarkData({ ...bookmarkData, bookmarkUrl: e.target.value })
//             }
//             required
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Title
//           </label>
//           <input
//             type="text"
//             placeholder="Bookmark title"
//             value={bookmarkData.title}
//             onChange={(e) =>
//               setBookmarkData({ ...bookmarkData, title: e.target.value })
//             }
//             required
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Description
//           </label>
//           <textarea
//             placeholder="Enter bookmark description"
//             value={bookmarkData.description}
//             onChange={(e) =>
//               setBookmarkData({ ...bookmarkData, description: e.target.value })
//             }
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Thumbnail URL
//           </label>
//           <input
//             type="url"
//             placeholder="https://example.com/image.jpg"
//             value={bookmarkData.thumbnail}
//             onChange={(e) =>
//               setBookmarkData({ ...bookmarkData, thumbnail: e.target.value })
//             }
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
//         >
//           Add Bookmark
//         </button>
//       </form>

//       {/* Folder List */}
//       <div className="w-full max-w-md">
//         {folders?.length > 0 && (
//           <div className="p-4 rounded-xl shadow bg-white/30 backdrop-blur">
//             <h3 className="text-xl font-semibold mb-4 text-gray-900">
//               Your Folders
//             </h3>
//             <ul className="space-y-2">
//               {folders.map((folder, index) => (
//                 <li
//                   key={index}
//                   className="text-white bg-blue-500 p-3 rounded-md flex justify-between items-center"
//                 >
//                   <span>📁 {folder.folderName}</span>
//                   <div className="space-x-2">
//                     <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded">
//                       Edit
//                     </button>
//                     <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded">
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {folders.map((folder) => (
//   <div key={folder.folderId} className="mt-6 bg-white/40 rounded-xl p-4">
//     <h3 className="text-xl font-bold text-gray-800 mb-2">📁 {folder.folderName}</h3>

//     {bookmarks.filter((bm) => bm.folderId === folder.folderId).length === 0 ? (
//       <p className="text-sm text-gray-600">No bookmarks in this folder.</p>
//     ) : (
//       <ul className="space-y-3">
//         {bookmarks
//           .filter((bm) => bm.folderId === folder.folderId)
//           .map((bm, i) => (
//             <li key={i} className="p-3 bg-white/80 rounded-md shadow">
//               <a href={bm.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold">
//                 {bm.title}
//               </a>
//               <p className="text-gray-700 text-sm">{bm.description}</p>
//               {bm.thumbnail && (
//                 <img src={bm.thumbnail} alt="Thumbnail" className="w-full max-w-xs mt-2 rounded" />
//               )}
//             </li>
//           ))}
//       </ul>
//     )}
//   </div>
// ))}

//       </div>
//     </div>
//   );
// };

// export default Folder;
import { useEffect, useState } from "react";
import { addFolder, getBokmrks, getFolder } from "../apiService/allApi";
import { addBokmrks } from "../apiService/allApi";

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({
    folderName: "",
    userId: "",
  });

  const [bookmarkData, setBookmarkData] = useState({
    folderId: "",
    userId: "",
    bookmarkUrl: "",
    title: "",
    description: "",
    thumbnail: ""
  });

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
        setFolderData((prev) => ({ ...prev, userId }));
        setBookmarkData((prev) => ({ ...prev, userId }));
        // const token = localStorage.getItem("token")
        // const headers = {
        //   "Content-Type": "multipart/form-data",
        //   "authorization": `Bearer ${token}`
        // }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const token = localStorage.getItem("token")
      // const headers = {
      //   "Content-Type": "multipart/form-data",
      //   "authorization": `Bearer ${token}`
      // }
      const res = await addFolder(folderData);
      if (res.status === 201) {
        alert("Folder added successfully");
        setFolders((prev) => [...prev, { ...folderData }]);
        setFolderData((prev) => ({ ...prev, folderName: "" }));
      } else {
        alert("Failed to add folder");
      }
    } catch (err) {
      console.error("Error to add:", err);
      alert("Failed to add folder.");
    }
  };

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
      // const token = localStorage.getItem("token")
      // const headers = {
      //   "Content-Type": "multipart/form-data",
      //   "authorization": `Bearer ${token}`
      // }
      const res = await addBokmrks(userId, data);

      if (res.status === 201) {
        alert("Bookmark added successfully!");
        setBookmarkData((prev) => ({
          ...prev,
          bookmarkUrl: "",
          title: "",
          description: "",
          thumbnail: "",
        }));
        fetchBookmarks(); // ✅ Refresh bookmark list
      } else {
        alert("Failed to add bookmark.");
      }
    } catch (error) {
      console.error("Error adding bookmark:", error);
      alert("Error adding bookmark.");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
    >
      {/* Folder Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl mb-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Folder</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Folder Name
          </label>
          <input
            type="text"
            placeholder="Enter folder name"
            value={folderData.folderName}
            onChange={(e) =>
              setFolderData({ ...folderData, folderName: e.target.value })
            }
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

      {/* Bookmark Form */}
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
            type="url"
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

      {/* Folder & Bookmarks Display */}
      <div className="w-full max-w-md">
        {folders.map((folder) => (
          <div key={folder.folderId} className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                📁 {folder.folderName}
              </h3>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditFolder(folder.folderId)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteFolder(folder.folderId)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="mt-4 bg-white/40 rounded-xl p-4">
              {Array.isArray(bookmarks) &&
                bookmarks.filter((bm) => bm.folderId === folder.folderId).length === 0 ? (
                <p className="text-sm text-gray-600">No bookmarks in this folder.</p>
              ) : (
                <ul className="space-y-3">
                  {
                  Array.isArray(bookmarks) &&
                    bookmarks
                      .filter((bm) => bm.folderId === folder.folderId)
                      .map((bm, i) => (
                        <li key={i} className="p-3 bg-white/80 rounded-md shadow">
                          <div className="flex justify-between items-start">
                            <div>
                              <a
                                href={bm.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 font-semibold"
                              >
                                {bm.title}
                              </a>
                              <p className="text-gray-700 text-sm">{bm.description}</p>
                              {bm.thumbnail && <h5>{bm.thumbnail}</h5>}
                            </div>
                            <div className="space-x-2 text-sm">
                              <button
                                onClick={() => handleEditBookmark(bm)}
                                className="text-blue-600 hover:underline"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteBookmark(bm)}
                                className="text-red-600 hover:underline"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </li>
                      ))
                      }
              
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>


    </div>
    
  );
};

export default Folder;


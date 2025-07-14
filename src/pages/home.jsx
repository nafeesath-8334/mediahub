import React, { useEffect, useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { addBokmrks, addFolder, getBokmrks, getFolder } from '../apiService/allApi';
import Folder from './folder';
import Bookmark from './bookmark';
import FolderList from './folderList';

const Home = () => {
   const [folders, setFolders] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [userData, setUserData] = useState({});

  // Initialize user and fetch folders/bookmarks
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
    if (storedUser && storedUser.UserId) {
      const userId = Number(storedUser.UserId);
      setUserData({ userId });
      fetchFolders(userId);
      fetchBookmarks(userId);
    }
  }, []);

  const fetchFolders = async (userId) => {
    try {
      const res = await getFolder(userId);
      setFolders(res.data.data || []);
    } catch (err) {
      console.error("Error fetching folders:", err);
    }
  };

  const fetchBookmarks = async (userId) => {
    try {
      const res = await getBokmrks(userId);
      setBookmarks(res.data.data || []);
    } catch (err) {
      console.error("Error fetching bookmarks:", err);
    }
  };

  
 
 
  return (
    <>
      <Navbar />
      
      <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}
    >
      
      <FolderList />
    </div>
 

      <Footer />
    </>
  );
};

export default Home;

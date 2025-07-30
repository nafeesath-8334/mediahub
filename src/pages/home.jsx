import React, { useEffect, useState } from 'react';

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
     
      
      
      
      <FolderList />
   
 

     
    </>
  );
};

export default Home;



const Folder=()=> {
  
  return (
     <div className="folder-container">
          <div className="profile-card">
                <div className="profile-header"></div>
                <form action="">
                    <h2>Folder</h2>
                    <div className="input-box1">
                        <label>FolderName</label>
                        <input type="text" placeholder="folderName" required />
                    </div>
                    
      <button type="submit">Create Folder</button>
    </form>
    </div>
  );
}

export default Folder;
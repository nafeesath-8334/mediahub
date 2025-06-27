import '../styles/style.css';

const Folder=()=> {
  
  return (
     <div className="wrapper">
          
                <form action="">
                    <h2>Folder</h2>
                    <div className="input-box">
                        <label>FolderName</label>
                        <input type="text" placeholder="folderName" required />
                    </div>
                    
      <button type="submit">Create Folder</button>
    </form>
    </div>
  );
}

export default Folder;
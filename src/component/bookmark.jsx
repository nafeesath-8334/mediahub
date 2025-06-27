import "../styles/style.css"
const BookMark=()=>{
    return(
        <div className="wrapper">
          
                <form action="">
                    <h2>Bookmark</h2>
                    <div className="input-box">
                        <label>Title</label>
                        <input type="text" placeholder="title" required />
                    </div>
                     <div className="input-box">
                        <label>Url</label>
                        <input type="text" placeholder="url" required />
                    </div>
                     <div className="input-box">
                        <label>Description</label>
                        <input type="text" placeholder="description" required />
                    </div>
      <button type="submit">Create Bookmark</button>
    </form>
    </div>
    )
}
export default BookMark
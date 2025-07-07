import { useState } from "react"

const BookMark=()=>{
const [bookmarkData,setBookmarkData]= useState({
  title:"",
  url:"",
  description:"",
  thumbnail:"",
  userId:"",
  folderId:"",


})
const handleSubmit=()=>{
  alert(`title${title}`)
}
    return(
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/bglog.jpg')" }}>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Bookmark</h2>
                    <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={bookmarkData.title} onChange={(e)=>{setBookmarkData({...bookmarkData,title:e.target.value})}}           
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
                    <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Url</label>
          <input
            type="text"
            placeholder="Enter url"   value={bookmarkData.url}
          onChange={(e)=>{setBookmarkData({...bookmarkData,url:e.target.value})}}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
          <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
          <input
            type="text"
            placeholder="Enter description"
            value={bookmarkData.description}
            onChange={(e)=>{setBookmarkData({...bookmarkData,description:e.target.value})}}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Thumbnail</label>
          <input
            type="text"
            placeholder="Enter thumbnail"
            value={bookmarkData.thumbnail}
            onChange={(e)=>{setBookmarkData({...bookmarkData,thumbnail:e.target.value})}}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
        >Create Bookmark</button>
    </form>
    </div>
    )
}
export default BookMark
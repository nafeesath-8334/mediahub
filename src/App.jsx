
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './component/login'
import Register from './component/register'
import Profile from './component/profile'
import EditProfile from './component/editProfile'
import Folder from './component/folder'
import BookMark from './component/bookmark'

function App() {
 

  return (
    <><div>
        <Login/> 
        <Register/> 
        <Profile/>  
         <EditProfile/>  
        <Folder/>
       <BookMark/>

    </div>
    
    </>
  )
}

export default App

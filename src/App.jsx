
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import EditProfile from './pages/editProfile'
import Folder from './pages/folder'
import Bookmark from './pages/bookmark'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/forgotPassword'

import Home from './pages/home'
import { Provider } from 'react-redux'
import ProtectedRoute from './provider/protectedRoute'
import { store } from './reduxTool/store'
import { ToastContainer } from 'react-toastify'
import FolderList from './pages/folderList'
import ResetPassword from './pages/resetPassword'
import EditBokmrk from './pages/editBokmrk'





function App() {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            {/* <Route path='/' element={<Navigate to="/home"/>} /> */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={< Login/>} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
             <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/profile' element={< Profile />} />
            <Route path='/editProfile' element={<EditProfile />} />
            <Route path='/folder' element={<Folder />} />
            <Route path='/bookmark' element={<Bookmark />} />
           <Route path='/folderList' element={<FolderList />} />
           <Route path='/editBokmrk' element={<EditBokmrk />} />
          </Routes>
        </Provider>



      </BrowserRouter>
      <ToastContainer/>


    </>
  )
}


export default App

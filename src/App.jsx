
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
import { CgLogIn } from 'react-icons/cg'





function App() {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
         
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={< Login/>} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
            <Route path='/' element={<ProtectedRoute><Login /></ProtectedRoute>} />
             <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute>< Profile /></ProtectedRoute>} />
            <Route path='/editProfile' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
            <Route path='/folder' element={<ProtectedRoute><Folder /></ProtectedRoute>} />
            <Route path='/bookmark' element={<ProtectedRoute><Bookmark /></ProtectedRoute>} />
           <Route path='/folderList' element={<ProtectedRoute><FolderList /></ProtectedRoute>} />
           <Route path='/editBokmrk' element={<ProtectedRoute><EditBokmrk /></ProtectedRoute>} />
          </Routes>
        </Provider>



      </BrowserRouter>
      <ToastContainer/>


    </>
  )
}


export default App

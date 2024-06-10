import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Notfound from './pages/Notfound'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Contact from './pages/Contact'
import Denied from './pages/Denied'
import CourseList from './pages/Course/CourseList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/contactus' element={<Contact/>} />
      <Route path='/courses' element={<CourseList/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
  )
}

export default App

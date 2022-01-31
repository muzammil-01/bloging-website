import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import all pages
import './App.css'
import AllBlogs from './pages/allblogs/Blogs'
import Blog from './pages/blog/Blog'
import Dashboard from './pages/dashboard/Dashboard'
import CreatePost from './pages/createpost/CreatePost';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import About from './pages/about/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { useCollection } from './hooks/useCollection';


import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {document} = useCollection('blogs')
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      {user && <Sidebar/>}
      <div className="container">
      <Navbar/>
        <Routes>
          <Route path='/' element={<AllBlogs />} />
          <Route path='about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
      <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

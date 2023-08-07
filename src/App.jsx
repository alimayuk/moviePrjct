import { Outlet, RouterProvider } from 'react-router'
import './App.css'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Category from './pages/Category'
import About from './pages/About'
import LogIn from './components/LogIn'
import Plans from './components/Plans'

function App() {
 const Layout = () =>{
  return (
    <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
 }

 const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      }, {
        path: "/movies",
        element: <Movies/>
      },{
        path: "/category",
        element: <Category/>
      },{
        path: "/about",
        element: <About/>
      },{
        path: "/start",
        element: <LogIn/>
      },{
        path: "/plans",
        element: <Plans/>
      },
      
    ]
  }
 ]);
 return(
  <>
  <RouterProvider router={router}/>
  </>
 )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components/Hero/Hero.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>,
)

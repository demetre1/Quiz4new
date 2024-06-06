import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes ,Route,Link} from "react-router-dom"
import Home from './page/Home/Home'
import Galery from './page/Galery/Galery'
import Profile from './page/Profile/Profile'
import Error from './page/Error/Error'
import axios from 'axios'
function App() {
  const [texts,setTexts] = useState([])
  useEffect(()=>{
    

    const fetchData = async ()=>{
      const response  = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=4`)
      
      setTexts(response.data)
  
        
    }
    fetchData()
  },[]);
 
  
   return(
    <BrowserRouter>
    <Link to="galery">galery </Link>
    <Link to="/"> home </Link>
    <Link to="profile"> profile</Link>
      <Routes>
      <Route path='profile' element={<Profile />}/>
      <Route path='galery' element={<Galery texts={texts} />}/>
      <Route path="*" element={<Error />}/>
        <Route path='/' element={<Home />}>
      
       
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App

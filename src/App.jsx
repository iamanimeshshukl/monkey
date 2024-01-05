import React from 'react'
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Signin from './Pages/Signin.jsx';
import Signup from './Pages/Signup.jsx';
import Premium from './Pages/Premium.jsx';
import Contact from './Pages/Contact.jsx';
import Error from './Pages/Error.jsx';
import Moviedetails from './Pages/Moviedeatils.jsx';
import Video from './components/Video.jsx';

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/premium" element={<Premium />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/movie/:id" element={<Moviedetails />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="*" element={<Error />}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App


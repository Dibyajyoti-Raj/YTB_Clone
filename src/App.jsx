import React, { useState } from 'react'
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
  const [sideBar, setSideBar] = useState(true)
  return (
    <div>
      <Nav setSidebar={setSideBar} />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home sidebar={sideBar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </div>
  );
}

export default App

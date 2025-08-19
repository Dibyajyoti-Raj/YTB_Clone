import React from 'react'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`ps-2 md:pe-5 fixed min-h-screen`}>
      <div className='flex flex-col pb-3'>
        <div className={`${category===0 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(0)}>
          <img src={home} alt="" className='size-7'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Home</p>
        </div>
        <div className={`${category===20 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" className='size-8'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Games</p>
        </div>
        <div className={`${category===2 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" className='size-8'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Automobiles</p>
        </div>
        <div className={`${category===17 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" className='size-7'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Sports</p>
        </div>
        <div className={`${category===24 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" className='size-7'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Entertainment</p>
        </div>
        <div className={`${category===28 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" className='size-7'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Tceh</p>
        </div>
        <div className={`${category===10 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" className='size-8'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Music</p>
        </div>
        <div className={`${category===22 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" className='size-8'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>Blog</p>
        </div>
        <div className={`${category===25 ? "active": ""} flex flex-row items-center px-2 py-1 gap-2`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" className='size-8'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>News</p>
        </div>
      </div>

      <hr />

      <div className='flex flex-col gap-3 ps-2 pt-3'>
        <h3 className={`${sidebar ? "hidden" : "md:block"} 'w-full uppercase hidden md:block'`}>Subscribed</h3>
        <div className="flex items-center gap-2">
          <img src={jack} alt="" className='size-10 rounded-full'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>PewDiepie</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={simon} alt="" className='size-10 rounded-full'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>MrBeast</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tom} alt="" className='size-10 rounded-full'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>justin bieber</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={megan} alt="" className='size-10 rounded-full'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>5-Minute Carft</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={cameron} alt="" className='size-10 rounded-full'/>
          <p className={`${sidebar ? "hidden" : "hidden md:block"}`}>NasDaily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

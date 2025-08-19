import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Feed from '../../Components/Feed'

const Home = ({sidebar}) => {
  const [category, setCategory] = useState(0)
  return (
    <div className='flex flex-row'>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`${sidebar? "ps-14 md:ps-20":"ps-48"} container min-w-screen`} >
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home

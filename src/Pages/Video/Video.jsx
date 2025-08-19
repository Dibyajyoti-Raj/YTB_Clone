import React from 'react'
import PlayVideo from '../../Components/PlayVideo'
import Recommended from '../../Components/Recommended'
import {useParams} from 'react-router-dom'

const Video = () => {
  const {videoId, categoryId} = useParams()
  console.log(videoId, " ", categoryId)
  return (
    <div className='flex flex-col lg:flex-row'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video

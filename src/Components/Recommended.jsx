import React, { useEffect, useState } from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import { API_Key, valueConverter } from '../data'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Recommended = ({categoryId}) => {
  const [recVid, setRecVid] = useState(null)
  const [loading, setLoading] = useState(true)
  const fetchRecVid = async ()=>{
    //fetching video data
    console.log(categoryId)
    const videos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_Key}`
    try {
      const response = await axios.get(videos);
      setRecVid(response.data.items); // axios already parses JSON
      console.log(apiData)
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    setLoading(true)
    fetchRecVid();
  },[])

  //scroll to the top on video click
  const scrollToVideo = () =>{
    const element = document.getElementById('MainVideo');
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // Added error handling for missing video data
  if (!recVid) {
    return <div>No video Recommendation!!</div>;
  }

  return (
    <div className='px-5'>
      {recVid.map((vid, index)=>(
        <Link key={index} onClick={scrollToVideo} to={`/video/${vid.snippet.categoryId}/${vid.id}`} className="flex flex-row space-y-4">
        <img src={vid.snippet.thumbnails.medium.url} alt="" className='rounded w-2/3'/>
        <div className="px-2 w-1/3">
          <h4 className='text-lg font-semibold'>{vid.snippet.title}</h4>
          <p className='text-lg font-medium'>{vid.snippet.channelTitle}</p>
          <p className='text-sm'>{valueConverter(vid.snippet.viewCount)} Views</p>
        </div>
      </Link>
      ))}
      
    </div>
  );
}

export default Recommended

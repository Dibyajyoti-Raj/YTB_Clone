import React, { useEffect, useState } from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_Key, valueConverter } from '../data'
import axios from 'axios'
import moment from 'moment'

const Feed = ({category}) => {

  const [data,setData] = useState([])

  const fetchDate = async () =>{
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_Key}`
    
    try {
      const response = await axios.get(videoList_url);
      setData(response.data.items); // axios already parses JSON
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  }

  useEffect(()=>{
    fetchDate()
  },[category])

  return (
    <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-3 lg:gap-5 items-center">
      {data.map((item, index) => (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="mx-auto mb-2">
        <img src={item.snippet.thumbnails.medium.url} alt="" className='rounded mb-1'/>
        <h2 className='text-lg font-semibold leading-snug'>{item.snippet.title}</h2>
        <h3 className='text-lg'>{item.snippet.channelTitle}</h3>
        <p className='text-sm font-medium'><span className='pe-4'>{valueConverter(item.statistics.viewCount)}</span> <span>{moment(item.snippet.publishedAt).fromNow()}</span></p>
      </Link>
      ))}

    </div>
  );
}

export default Feed

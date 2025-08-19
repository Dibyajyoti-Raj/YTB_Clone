import React, { useEffect, useState } from "react";
import video from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";
import { API_Key, valueConverter } from "../data";
import axios from 'axios';
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = ({videoId}) => {

  const params = useParams();
  const actualVideoId = videoId || params.videoId;
  console.log(actualVideoId)

  const [apiData, setApiData] = useState(null)
  const [channelData, setChannelData] = useState(null)
  const [commentsData, setCommentsData] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchVideoData = async () => {
    console.log("fetching video data");
  
    const videoLink = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${actualVideoId}&key=${API_Key}`;
    try {
      const response = await axios.get(videoLink);
      setApiData(response.data.items[0]); // axios already parses JSON
    } catch (error) {
      console.error("Error fetching Channel data:", error);
    }finally{
      setLoading(false);
    }
  };
  

  const fetchChannelData = async ()=>{
    //fetching channel data
    const channelLink = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_Key}`
    try {
      const responseC = await axios.get(channelLink);
      setChannelData(responseC.data.items[0]); // axios already parses JSON
    } catch (error) {
      console.error("Error fetching Channel data:", error);
    }
  }

  const fetchCommentsData = async ()=>{
    //fetching comments data
    const commentLink = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${actualVideoId}&key=${API_Key}`
    try {
      const responseCm = await axios.get(commentLink);
      setCommentsData(responseCm.data.items); // axios already parses JSON
    } catch (error) {
      console.error("Error fetching Channel data:", error);
    }
  }

  useEffect(() => {
    console.log(" called for fetching video data")
    fetchVideoData();
  },[]);
  // fetchVideoData();

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  useEffect(() => {
    fetchCommentsData();
  }, [apiData]);

  // Added loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Added error handling for missing video data
  if (!apiData) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <div id="MainVideo">
      <iframe width="725" height="418" src={`https://www.youtube.com/embed/${actualVideoId}?autoplay=1`} 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

     <div className="p-2">
        <h3 className="pt-1 text-xl font-semibold">
          {apiData ? apiData.snippet.title : "Title here"}
        </h3>
        <div className="flex justify-between items-baseline pb-2 text-lg">
          <p>
            {valueConverter(apiData?.statistics.viewCount)}{" "}
            {moment(apiData?.snippet.publishedAt).fromNow()}
          </p>
          <div className="flex flex-row justify-between gap-4">
            <span className="flex flex-row gap-1">
              <img src={like} alt="" className="size-6" />
              {apiData.statistics.likeCount}
            </span>
            <span className="flex flex-row gap-1">
              <img src={dislike} alt="" className="size-6 my-auto" />
            </span>
            <span className="flex flex-row gap-1">
              <img src={share} alt="" className="size-6" />
              {apiData.statistics.likeCount}
            </span>
            <span className="flex flex-row gap-1">
              <img src={save} alt="" className="size-6" />
              {apiData.statistics.likeCount}
            </span>
          </div>
        </div>

        <hr />

        <div className="flex flex-row justify-between pt-3 px-1">
          <div className="flex flex-row gap-2">
            <img
              src={
                channelData ? channelData.snippet.thumbnails.default.url : jack
              }
              alt=""
              className="size-14 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">
                {apiData.snippet.channelTitle || "CHANNEL NAME"}
              </p>
              <span>
                {channelData
                  ? valueConverter(channelData.statistics.subscriberCount)
                  : "1M"}
              </span>
            </div>
          </div>
          <button className="subscribe text-lg font-semibold ">
            Subscribe
          </button>
        </div>

        
        <div className="">
          <div className="py-2">
            <p className="text-lg">
              {apiData.snippet.description.slice(0, 250)}
            </p>
          </div>

          <hr />

          <h4 className="font-bold text-xl py-2">
            {valueConverter(apiData.statistics.commentCount) || "102"} Comments
          </h4>
          {commentsData.map((comment, index) => (
            <div key={index} className="flex flex-row gap-2 px-2 pb-4">
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt=""
                className="size-10 rounded-full mt-2"
              />
              <div>
                <h3 className="font-semibold">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span className="font-medium text-sm">1 day ago</span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="flex flex-row gap-2">
                  <img src={like} alt="" className="size-6" />{" "}
                  <span className="pe-4">{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" className="size-6" /> <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default PlayVideo;
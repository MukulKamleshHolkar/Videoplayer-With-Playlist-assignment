import React, { useState, useEffect } from "react";
import './VideoPlayer.css';
import ReactPlayer from 'react-player'
import {Playlist } from "./Playlist";


const VideoPlayer = (props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [actLink, setactLink] = useState(Playlist[currentVideoIndex].link);
  const [acttitle, setacttitle] = useState(Playlist[currentVideoIndex].title);
  const img1 = require('../assests/images/Video1Img.jpg')
  const img2 = require('../assests/images/Video2Img.jpg')
  const img3 = require('../assests/images/Video3Img.jpg')
  const img4 = require('../assests/images/Video4Img.jpg')

  useEffect(() => {
    setactLink(Playlist[currentVideoIndex].link);
    setacttitle(Playlist[currentVideoIndex].title);
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % Playlist.length);
  };

  return (
    <>
     {/*----------Main Video------------- */}

      <div className="row ">
        <div className="col-8 d-flex flex-wrap justify-content-center align-items-center">
          <div className='main-video'>
            <div className='video mt-5 ml-1'>
              <ReactPlayer
                controls={true}
                url={actLink}
                height='450px'
                width="800px"
                autoPlay={true}
                onEnded={handleVideoEnd}
                playing
              />
              <h3 className='Title' style={{ color: "white", marginTop: '30px' }}>{acttitle}</h3>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex flex-wrap align-items-center justify-content-start">

          {/*----------Playlist------------- */}

          {Playlist.map((e, index) => {
            return (
              <div className='videoBars border-left border-body mt-2'style={{  width:'250px' }} key={index} onClick={() => {
                setCurrentVideoIndex(index);
              }}>
                <div className='videoBar active' style={{ marginLeft: "-100px", width:'100px' }} >
                  <img src={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : index === 3 && img4} />
                  <div className='videoBarText'>
                    <h3 style={{ color: "white" }}>{e.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

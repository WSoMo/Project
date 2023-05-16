import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styled/Trailer.css'


function Trailer({moviesTitle, toggle}) {
    const [video, setVideo] = useState ("")
    const [videoURL, setVideoURL] = useState ("https://www.youtube.com/watch?v=NkGmR_UU96U");

    function handleSearch () {
        // setVideo (moviesTitle)
        movieTrailer(video).then((res) =>{
        setVideoURL(res);
        });
    }
    // useEffect (()=>{
    //     handleSearch()
    // },[videoURL])
  return (
    <Fragment>
      <div className='Container'></div>
      <div className='player'>
        <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{moviesTitle} </h1>
        <ReactPlayer url={videoURL} controls={true} width={'800px'} height={'500px'} muted={false} />
      </div>
    </Fragment>
  )
}

export default Trailer
import React, { useEffect, useState, useContext} from "react"
import axios from 'axios'
import "../Styled/Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import { Container } from './NavBar'
import Detail from "./Detail";

function Home (){
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [popularMovies, setPopularMovies]=useState ([])
    const Shown = input ? 'search' : 'movie'
    const Api = `https://api.themoviedb.org/3/${Shown}/popular`

    const HomeCall = async() => {
      const data = await axios.get (Api, {
      params: {
        api_key:'400334e7d27839e434c90b8a59bd3cea',
        query: input
      }
    })
    const results = data.data.results
    setPopularMovies(results)
    }
    useEffect(() => {
      setTimeout (() =>{
        HomeCall()
      }, 100)
      
    },[input])

    return (
        <>
        
            <div className="poster">
              
                <Carousel
                    // showThumbs={false}
                    // autoPlay={true}
                    // transitionTime={3}
                    // infiniteLoop={true}
                    // showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link
                            key={movie.id}
                            style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                                
                            </Link>
                            
                        ))
                    }
                  
                    
                </Carousel>
                <MovieList />
                
            </div>
           
        </>
    )
}

export default Home
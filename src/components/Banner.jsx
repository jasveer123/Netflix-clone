import React , {useState , useEffect} from 'react'
import axios from '../axios'
import requests from '../secrete'
import "./Banner.css"
function Banner() {
    const [movies, setmovies]=useState([])
    useEffect(()=>{
    async function fetchData(){
        const getData = await axios.get(requests.fetchNetflixOriginals);
        setmovies(getData.data.results[Math.floor(Math.random()*getData.data.results.length-2)])
        return getData
    }
    fetchData()
    },[])
  return (
    <header className='banner'
    style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")` }}>
      <div className='banner_2'>
        <h1 className='banner_title'>
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div>
          <button className='banner_btn'>Play</button>
          <button className='banner_btn'>My List</button>
        </div>
        <h1 className='banner_over'>
          {movies.overview}

        </h1>

      </div>
      <div className='banner--fadeButtom'/>
    </header>
  )
}

export default Banner
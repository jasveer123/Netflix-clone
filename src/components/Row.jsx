
import React ,{useState, useEffect} from 'react'
import axios from '../axios'
import "./Row.css"
function Row({title ,fetchUrl , isSmallRow}) {
const [movies, setmovies]=useState([])
//const base_url ="https://image.tmdb.org/t/p/original/"
useEffect(()=>{

async function fetchData(){
    const getData = await axios.get(fetchUrl);
    setmovies(getData.data.results)
    return getData
}
fetchData()
},[fetchUrl])
  return (
    <div className='Row'>
        <h3 className='tit'>{title}</h3>
        <div className="poster">
        {movies.map(movie=>(
            <img key={movie.id} className={`poster_img ${isSmallRow && "poster_img_small"}`}src={"https://image.tmdb.org/t/p/original/"+`${isSmallRow ? movie.backdrop_path : movie.poster_path }`} alt={movie.name}/>
        ))}
        </div>
    </div>
  )
}

export default Row
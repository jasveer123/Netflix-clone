import React, { useEffect, useState } from 'react'
import "./Navbar.css"
function Navbar() {
    const [show, handleShow] = useState([])
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
            handleShow(true)

            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        }
    },[])
  return (
    <div className={`navbar ${show && "nav_black"}`}>
     <img className='netflix_image_1' src="https://www.linkpicture.com/q/580b57fcd9996e24bc43c529.png"/>
     <img className='netflix_image_2' src="https://www.linkpicture.com/q/flat-800x800-075-f.u2.jpg"/>
    </div>
  )
}

export default Navbar
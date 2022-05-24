import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    const handleClick=()=>{
        document.getElementById("navbar-list").classList.toggle("active")
    }
  return (
      <>
       <div className="container">
           <div className="logo"><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg></NavLink></div>
           <div className="navbar">
               <ul id="navbar-list" className='navbar-list'>
                   <li className='navbar-list-items'><NavLink className='link' to="/">Home</NavLink></li>
                   <li className='navbar-list-items'><NavLink className='link' to="/destination">Destination</NavLink></li>
                   <li className='navbar-list-items'><NavLink  className='link' to="/crew">Crew</NavLink></li>
                   <li className='navbar-list-items'><NavLink className='link' to="/technology">Technology</NavLink></li>
                    
               </ul>
               <div className='hamburger'>

                   <img onClick={handleClick} src="./images/shared/icon-hamburger.svg"/>

                   <img onClick={handleClick} src="assest/shared/icon-hamburger.svg"/>


               </div>
           </div>
       </div>
      </>
   
  )
}

export default Navbar
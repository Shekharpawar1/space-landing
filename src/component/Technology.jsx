
import React, { useState } from 'react'
import technology from "./data3"
import "./technology.css"
import "./destination.css"

function Technology() {
 
  const [value,setValue]=useState(0)
  const {name,images,description}=technology[value]
  return (
    <>
    <section>
      <article className='col-1'>
        <h1><span>03</span>SPACE LAUNCH 101</h1>
        <img src={images.portrait} id="desktop-img" alt={name}/>
        <img src={images.landscape} id="mobile-img" alt={name}/>
      </article>
      <article className='col-2'>
       
        {technology.map((item,index)=>{return (<button  id="tech"key={index} onClick={()=>{setValue(index)}}>{item.id}</button>)})}
        <p className='top-para top'>THE TERMINOLOGY...</p>
        <h3>{name}</h3>
        <p>{description}</p>
        
      </article>
    </section>
    </>
=======
import React from 'react'

function Technology() {
  return (
    <div>Technology</div>
>>>>>>> dc79574cc8705daf830ffa32c12e7cdcf6c37790
  )
}

export default Technology
<<<<<<< HEAD
import React, { useState } from 'react'
import crew from "./data2"
import "./destination.css"
import "./crew.css"

function Crew() {
  const [value,setValue]=useState(0)
  const {name,images,role,bio}=crew[value]
  return (
    <>
       <section>

       <article id="cw"> <h1><span>02</span>MEET YOUR CREW</h1></article>
         <article className='col1' id="col1"> 

           <img id="crew" src={images} alt={name}/>

         </article>
         <hr /> 
         <article className='col2'>
           {crew.map((item,index)=>{
                return (<button  id="crews" onClick={()=>{setValue(index)}}key={index}></button>)
           })}
           

           <h2>{role}</h2>
           <h3>{name}</h3>
          <p>{bio}</p>
         

         </article>
        


       </section>
    
    </>
=======
import React from 'react'

function Crew() {
  return (
    <div>Crew</div>
>>>>>>> dc79574cc8705daf830ffa32c12e7cdcf6c37790
  )
}

export default Crew
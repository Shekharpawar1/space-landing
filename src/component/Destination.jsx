<<<<<<< HEAD
import React, { useState } from 'react'
import destinations from './data'
import "./destination.css"




function Destination() { 
 const [value,setValue]=useState(0)
 const{name,images,description,distance,travel}=destinations[value]
  return(
    <>
    <main>
    <section>
    <article className='col1'>
        <h1><span>01</span>PICK YOUR DESTINATION</h1>
        
          <img id="celestial" src={images} alt={name}/>
        </article>
     
      <article className='col2'>
      {destinations.map((items,index)=>{
      
      return(<button  id="celestialBodies" key={index} onClick={()=>{setValue(index)}}>{items.name}</button>)

    
    })}
      
            
      <h3>{name}</h3>
           <p>{description}</p>
           <hr></hr>
           <ul>
             <li>
               <span>AVG.DISTANCE</span>
                {distance}
             </li>
             <li>
               <span>EST. TRAVEL TIME </span>
               {travel}
             </li>
           </ul>
        

      </article>
    </section>
   
        
        </main>

      
    </>
  )
    
 
 
    
   
   
  
=======
import React from 'react'

function Destination() {
  return (
    <div>Destination</div>
  )
>>>>>>> dc79574cc8705daf830ffa32c12e7cdcf6c37790
}

export default Destination
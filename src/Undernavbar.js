import React from 'react'
import "./css/undernavbar.css"
import "./css/inner-image.text.css"
import YoutubeEmbed from './YoutubeEmbed'
import "./css/box.css"
import keyboard from "./images/keyboard.jpg"

function Undernavbar() {
  return (
    <div className="undernavbar">
      <h1 className='inner-image-text'>Welcome Traveler! </h1>
      <h3 className='inner-image-text2'> This is a challenging PVP and PVE that will test your will to survive!
      <br></br><br></br><button type="button" class="btn btn-secondary btn-lg">Play Now!</button></h3> 
    <YoutubeEmbed/>
   <div class="container">
    <div className='box row d-flex'>
      <div class="col">
      <h2 class="col">Work Together</h2>
      <p className='paragraph2 col'>Join parties and fight bosses. Level up and become the strongest Soul.</p>
      </div>
      <div class="col">
      <h2 class="col">Be Careful Traveler!</h2>
     <p className='paragraph2 col'> Enemy players can join your world and try to kill you.</p>
     </div>
      </div>
      </div>
     </div>
     
  )
}

export default Undernavbar
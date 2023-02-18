import React from 'react'
import "./header.css"

function Header() {
  return (
    <div class="header">
         <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid top-container" >
    <div class="col-sm-1 px-0">
    <img src={require('../images/logo.jpg')} class="img"  alt="Logo"/>
    <a class="navbar-brand" href="#">Souls</a>
    </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbarlist collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Play Now</a>
        <a class="nav-link" href="#">Getting Started</a>
        <a class="nav-link" href="#">Marketplace</a>
        <a class="nav-link" href="#">Buy Token</a>
        <a class="nav-link" href="#">Raffle</a>
        <a class="nav-link" href="#">Staking</a>
        <a class="nav-link" href="#">Battle</a>
        <a class="nav-link" href="#">News</a>
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default Header
import React from 'react'
import "./css/Navbar.css"

function Navbar() {
  return (
    <nav class="navbartop navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbarlabel navbar-brand " href="#">Souls</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      Nav Bar
      <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
  
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-list navbar-nav">
          <li class="nav-item " >
            <a class="nav-link-item nav-link " aria-current="page" href="Home">Home</a>
          </li>
          <li class="navbar-list nav-item">
            <a class="nav-link-item nav-link" href="Whitepaper">Whitepaper</a>
          </li>
          <li class="navbar-list nav-item">
            <a class="nav-link-item nav-link" href="FAQ">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
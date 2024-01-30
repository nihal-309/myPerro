import React from "react";
import IMG1 from "../images/paw-print.png"

function Header(){
    return(
        <div className="Header">
        <nav class="navbar navbar-light bg-warning navbar-expand-lg ">
  <div class="container-fluid">
    <img className="nav-img" src={IMG1} alt="" />
    <h1 className="nav-he"><span className="my">my</span>Perro</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link"href="#/">Login</a></li>
        <li class="nav-item"><a class="nav-link" href="#/">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="#/">Contact Us</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#/">Grooming</a></li><hr />
            <li><a class="dropdown-item" href="#/">Boarding</a></li><hr />    
            <li><a class="dropdown-item" href="#/">Training</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#/">Dog Food</a></li><hr />
            <li><a class="dropdown-item" href="#/">Toys</a></li><hr />
            <li><a class="dropdown-item" href="#/">Grooming Supplies</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
}

export default Header;
import React from "react";

// Main menu
function Nav() {
    return (
      <nav class="uk-navbar uk-navbar-container uk-navbar-transparent">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div class="uk-navbar-right"> 
          <ul class="uk-navbar-nav"> 
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }

  export default Nav;
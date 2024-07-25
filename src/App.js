import React from "react";
import Nav from "./components/nav"
import Home from "./pages/home";
import Catalog from "./pages/catalog";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from "./pages/about";


// Header
function Header() {
  return (
    <header class="uk-section-secondary">
      <div class="uk-container uk-container-xlarge">
        <Nav />
      </div>
    </header>
  )
}

// Render app
function App() {
    return (
      <Router>
        <div>
          <Header />
          <main class="uk-container uk-container-xlarge">
            <div class="uk-section uk-section-default">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    );
  }

export default App;
import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div>
      <header className="hero">
        <nav className="nav">
          <h1 className="logo">AviaFly</h1>

          <div className="nav-menu">
            <p>Flights</p>
            <p>Hotels</p>
            <p>Deals</p>
            <p>Help</p>
          </div>
        </nav>

        <div className="hero-center">
          <h2>Cheap flights — without overpaying </h2>
          <p>Search, compare and book airline tickets worldwide</p>

          <div className="search-card">
            <input placeholder="From" />
            <input placeholder="To" />
            <input type="date" />
            <input type="date" />
            <button>Search</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App

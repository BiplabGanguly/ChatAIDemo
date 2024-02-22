import React from 'react'
import "../Style/NavCss.css"

function Navbar() {
    return (
        <nav className="navbar nav" fixed>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 nav-title">Chat AI</span>
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react'
import {
    NavLink
  } from "react-router-dom";

import "./style.css"

function index() {
    return (
        <header className="header">
            <h1 className="nome-site-header">Site De Letras</h1>
                <nav className="menu-principal">
                    <NavLink exact to="/" className="menu-principal-link">Home</NavLink>
                    <NavLink exact to="/artistas" className="menu-principal-link">Artistas</NavLink>
                </nav>
        </header>
    )
}

export default index

import React from 'react'
import {
    Route
  } from "react-router-dom";


import Home from "../../pages/Home";
import Artistas from "../../pages/Artistas"
import Artista from "../../pages/Artista"

function index() {
    return (
        <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/artistas" component={Artistas}/>
        <Route path="/artista/:nome" component={Artista}/>
        </>
    )
}

export default index

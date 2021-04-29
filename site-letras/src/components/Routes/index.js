import React from 'react'
import {
    Route
  } from "react-router-dom";


import Home from "../../pages/Home";
import Artistas from "../../pages/Artistas"

function index() {
    return (
        <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/artistas" component={Artistas}/>
        </>
    )
}

export default index

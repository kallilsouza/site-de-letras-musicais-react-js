import React from 'react'
import {
    Route, Redirect, Switch
  } from "react-router-dom";


import Home from "../../pages/Home";
import Artistas from "../../pages/Artistas"
import Artista from "../../pages/Artista"
import Letra from "../../pages/Letra"
import NotFound from "../../pages/NotFound"

function index() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/artistas" component={Artistas}/>
            <Route path="/artista/:nome" component={Artista}/>
            <Route path="/letra/:id" component={Letra}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default index

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../Home";
import Artistas from "../Artistas"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Site De Letras</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/artistas">Artistas</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/artistas" component={Artistas}/>
                </div>
            </div>
        </HashRouter>
        
    );
  }
}
 
export default Main;
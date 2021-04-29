import React, { Component } from "react";
import {
  HashRouter
} from "react-router-dom";

import Header from "../../components/Header"
import Routes from "../../components/Routes"

import "../../styles/global.css"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <Header/>
                <div className="content">
                    <Routes/>
                </div>
            </div>
        </HashRouter>        
    );
  }
}
 
export default Main;
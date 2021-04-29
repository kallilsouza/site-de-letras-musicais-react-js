import React, { Component } from "react";
import {
  BrowserRouter
} from "react-router-dom";

import Header from "../../components/Header"
import Routes from "../../components/Routes"

import "../../styles/global.css"
 
class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="content">
                    <Routes/>
                </div>
            </div>
        </BrowserRouter>        
    );
  }
}
 
export default Main;
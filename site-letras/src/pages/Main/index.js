import React from "react";
import {
  BrowserRouter
} from "react-router-dom";

import Header from "../../components/Header"
import Routes from "../../components/Routes"

import "../../styles/global.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Carregamento from "../../components/Carregamento"


const Main = () => {
  return (
      <BrowserRouter>
          <div>
              <Header/>
              <Carregamento carregado={true} />
              <div className="content">
                  <Routes/>
              </div>
          </div>
      </BrowserRouter>
  );
}
 
export default Main;
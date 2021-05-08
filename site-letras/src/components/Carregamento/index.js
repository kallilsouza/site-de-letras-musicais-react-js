import Loader from "react-loader-spinner";

import "./style.css"

import React from 'react'


// https://www.npmjs.com/package/react-loader-spinner
const Carregamento = (props) => {
    if(props.carregado === false){
        return (
            <div className="tela-carregamento">
                <div className="container-loader">
                    <Loader
                        type="TailSpin"
                        color="#ffff42"
                        height={100}
                        width={100}
                        //timeout={3000} //3 secs
                    />
                </div>
            </div>
          
        );
    }
    else{
        return (
            <></>
        )
    }
}

export default Carregamento
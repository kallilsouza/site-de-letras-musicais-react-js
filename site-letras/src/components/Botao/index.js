import React from 'react'

import "./style.css"

const Botao = (props) => {
    return (
        <button className="botao" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Botao

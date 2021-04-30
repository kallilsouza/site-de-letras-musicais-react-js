import React from 'react'

import "./style.css"

const Erro = (props) => {
    return (
        <div className="erro">
            <h3>Erro:</h3>
                <p>{props.mensagem}</p>
        </div>
    )
}

export default Erro

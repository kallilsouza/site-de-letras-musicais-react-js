import React from 'react'

import "./style.css"

const Erro = (props) => {
    const mensagem = typeof(props.mensagem) === "undefined" ? "Um erro ocorreu" : props.mensagem
    return (
        <div className="erro">
            <h3>Erro</h3>
                <p>{mensagem}</p>
        </div>
    )
}

export default Erro

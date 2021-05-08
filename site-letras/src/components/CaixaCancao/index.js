import React from 'react'

import "./style.css"

import {NavLink} from 'react-router-dom'

const CaixaCancao = ({cancao}) => {
    return (
        <div className="caixa-cancao">
            <NavLink to={"/letra/"+cancao.artista_principal.nome+"/"+cancao.nome}>
                <h3>{cancao.nome}</h3>
            </NavLink>
            
        </div>
    )
}

export default CaixaCancao
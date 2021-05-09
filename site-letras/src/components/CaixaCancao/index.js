import React from 'react'

import "./style.css"

import {NavLink} from 'react-router-dom'

const CaixaCancao = ({cancao, mostrarNomeArtista}) => {
    console.log(mostrarNomeArtista)
    mostrarNomeArtista = typeof(mostrarNomeArtista) === 'undefined' ? true : false
    console.log(mostrarNomeArtista)
    return (
        <div className="caixa-cancao">
            <NavLink to={"/letra/"+cancao.artista_principal.nome+"/"+cancao.nome}>
                {cancao.nome}{mostrarNomeArtista ? " ("+cancao.artista_principal.nome+")" : ""}
            </NavLink>
        </div>
    )
}

export default CaixaCancao
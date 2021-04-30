import React from 'react'

import "./style.css"

const CaixaArtista = (props) => {
    const imagemPadrao = require('../../assets/imagens/no-image-found.png')
    const urlImagem = props.artista.imagem===null ? imagemPadrao.default : props.artista.imagem
    return (
        <div className="caixa-artista">
            <img className="caixa-artista-imagem" src={urlImagem} alt={props.artista.nome} />
            <div className="caixa-artista-nome">{props.artista.nome}</div>
        </div>
    )
}

export default CaixaArtista
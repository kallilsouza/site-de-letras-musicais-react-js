import React, {useEffect, useState} from 'react'

import {
    NavLink
  } from "react-router-dom";

import api from "../../services/api"
import Erro from "../../components/Erro"

import "./style.css"

const carregarCancao = async (nomeArtista, nomeCancao) => {
    return api({
        method: 'get',
        url: '/cancoes/',
        params: {
            nome_exato_artista: nomeArtista,
            nome_exato: nomeCancao
        }
    })
}

const Letra = (props) => {
    const [erro, setErro] = useState(false)
    const cancaoVazia = {
        nome: "",
        letra: "",
        artista_principal: {
            nome: "",
            id: "",
        }
    }
    const [cancao, setCancao] = useState(cancaoVazia)
    useEffect(() => {
        carregarCancao(
            props.match.params.nomeArtista, 
            props.match.params.nomeCancao
        ).then(r =>
        {   
            if (r.data.results.length === 1){
                setCancao(r.data.results[0])
            }
            else {
                setErro(true)
            }
        })
    }, [props.match.params.nomeArtista, props.match.params.nomeCancao])
    console.log(cancao)
    if(erro){
        return (
            <div className="conteudo">
                <Erro mensagem="Letra não encontrada"/>
            </div>
        )
    }
    else{
        return(
            <div className="conteudo">
                <h1 className="titulo-principal">{cancao.nome}</h1>
                <h2 className="titulo-nome-artista"><NavLink exact to={"/artista/"+cancao.artista_principal.nome}>{cancao.artista_principal.nome}</NavLink></h2>
                <h3>Letra:</h3>
                <div className="letra">
                    <p>
                    {cancao.letra.split("\n").map((i,key) => {
                        return <div key={key}>{i}</div>;
                    })}
                    </p>
                </div>
            </div>
        )
    }
}

export default Letra

import {React, useState, useEffect} from "react";

import api from "../../services/api"

import "./style.css"

import Erro from "../../components/Erro"

const carregarArtista = async (nome) => {
  return api({
    method: 'get',
    url: '/artistas/',
    params: {
      nome_exato: nome
    }
  })
}
 
const Artistas = (props) => {
  const [artista, setArtista] = useState([])
  const [erro, setErro] = useState(false)
  const imagemPadrao = require('../../assets/imagens/no-image-found.png')
  const [URLImagem, setURLImagem] = useState(imagemPadrao.default)
  useEffect(() => {
    carregarArtista(props.match.params.nome).then( r =>
        {   
            if (r.data.results.length === 1){
                setArtista(r.data.results[0]) 
                if(r.data.results[0].imagem !== null){
                  setURLImagem(r.data.results[0].imagem)
                }
            }
            else {
                setErro(true)
            }
        }
    )
  }, [props.match.params.nome]);
  return(      
      <div>
        {erro && <Erro mensagem="Artista não encontrado"/>}

        {!erro &&     
          <div className="pagina-artista-info">
            <div className="pagina-artista-nome-imagem">          
            <img className="pagina-artista-imagem" src={URLImagem} alt={artista === [] ? "" : artista.nome} />
            <h2 className="pagina-artista-nome">{artista === [] ? "" : artista.nome}</h2>
          </div>
          <div className="pagina-artista-sobre">
            <h3>Sobre</h3>
            <p>
              {artista === [] ? "" : artista.sobre}
            </p>
            
          </div>
          </div>   
        }
          
      </div>
  )
      
}
 
export default Artistas;
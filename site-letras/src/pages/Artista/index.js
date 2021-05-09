import {React, useState, useEffect} from "react";

import api from "../../services/api"
import "./style.css"

import Erro from "../../components/Erro"
import Carregamento from "../../components/Carregamento"
import CaixaCancao from "../../components/CaixaCancao"

const carregarArtista = async (nome) => {
  return api({
    method: 'get',
    url: '/artistas/',
    params: {
      nome_exato: nome
    }
  })
}

const CarregarCancoesArtista = async (nome) => {
  return api({
    method: 'get',
    url: '/cancoes/',
    params: {
      nome_exato_artista: nome
    }
  })
}
 
const Artistas = (props) => {
  const artistaVazio = {
    nome: "",
    sobre: "",
    imagem: "",
  }
  const [artista, setArtista] = useState(artistaVazio)
  const [erro, setErro] = useState(false)
  const imagemPadrao = require('../../assets/imagens/no-image-found.png')
  const [URLImagem, setURLImagem] = useState(imagemPadrao.default)
  const [carregado, setCarregado] = useState(false)
  const [cancoes, setCancoes] = useState([])
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
            setCarregado(true)
        }
    ).catch(r => {
      setErro(true)
    })
  }, [props.match.params.nome]);

  useEffect(() => {
    CarregarCancoesArtista(props.match.params.nome).then(r => {
      setCancoes(r.data.results)
    }).catch(r => {
      //erro
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!carregado && !erro){
    return (
      <>
        <Carregamento carregado={false}/>
      </>
    )
  }
  else if(erro && !carregado){
    return (
      <>
        <Erro mensagem="Ocorreu um erro ao carregar esta página"/>
      </>
      
    )
  }
  else if(erro && carregado){
    return(
      <>
       <Erro mensagem="Artista não encontrado"/>
      </>
    )
  }
  else{
    return(      
      <div className="conteudo">       
          <div className="pagina-artista-info">
            <div className="pagina-artista-nome-imagem">          
              <img className="pagina-artista-imagem" src={URLImagem} alt={artista.nome} />
              <h2 className="pagina-artista-nome">{artista.nome}</h2>
            </div>
            <div className="pagina-artista-sobre">
              <h3>Sobre</h3>
              <p>
                {artista.sobre}
              </p>
            </div>          
          </div>   
          <h2>Canções</h2>     
          <div className="pagina-artista-cancoes">
            <ul>
              {cancoes.map((cancao, i) => {
                return <CaixaCancao cancao={cancao} />
              })}
            </ul>
          </div>     
      </div>
    )
  }
  
      
}
 
export default Artistas;
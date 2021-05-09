import {React, useState, useEffect} from "react";
import api from "../../services/api"

import CaixaArtista from "../../components/CaixaArtista"
import Erro from "../../components/Erro"
import Botao from "../../components/Botao"

import "./style.css"

const carregarArtistas = async ({page}) => {
  return api({
    method: 'get',
    url: '/artistas/',
    params: {
      ordem_alfabetica: true,
      page: page
    }
  })
}
 
const Artistas = () => {
  const [artistas, setArtistas] = useState([])
  const [carregado, setCarregado] = useState(false)
  const [erro, setErro] = useState(false)
  const [page, setPage] = useState(1)
  const [qtdArtistas, setQtdArtistas] = useState(0)
  const [todosCarregados, setTodosCarregados] = useState(false)

  useEffect(() => {
    carregarArtistas({page: 1}).then( r =>{
      setArtistas(r.data.results)
      setCarregado(true)
      setQtdArtistas(qtdArtistas+r.data.results.length)
      console.log(qtdArtistas, r.data.count)
      if(qtdArtistas < r.data.count){
        setPage(page+1)
      }
      else{
        setTodosCarregados(true)
      }
    }).catch(r => {
      setErro(true)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function carregarMais(){
    carregarArtistas({page: page}).then( r =>{
      setArtistas(artistas.concat(r.data.results))
      setCarregado(true)
      setQtdArtistas(qtdArtistas+r.data.results.length)
      console.log(qtdArtistas, r.data.count)
      if(qtdArtistas < r.data.count){
        setPage(page+1)
      }
      else{
        setTodosCarregados(true)
      }
    }).catch(r => {
      //erro
    })
  }

  if(!carregado && !erro){
    let caixas = []
    for(let i=0; i<20; i++){
      caixas.push(<CaixaArtista carregado={false} artista={{}}/>)
    }
    return (
      <div>
        <h1 className="titulo-principal">Artistas</h1>   
        <div className="container-lista-artistas">
          <ul className="lista-artistas">
            {caixas}
          </ul>
        </div>     
      </div>
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
    <></>
  }
  else{
    return(
      <div className="conteudo">
        <h1 className="titulo-principal">Artistas</h1>   
        <div className="container-lista-artistas">
          <ul className="lista-artistas">
            {artistas.map((artista) => (
              <li className="lista-artistas-artista" key={artista.id}>
                <CaixaArtista artista={artista} />
              </li>
            ))}
          </ul>
          {!todosCarregados && 
            <div className="carregar-mais">
              <Botao onClick={carregarMais}>
              carregar mais
            </Botao>
            </div>
          }
        </div>     
      </div>
    )      
  }
  
}
 
export default Artistas;
import {React, useState, useEffect, useParams} from "react";

import api from "../../services/api"

import CaixaArtista from "../../components/CaixaArtista"
import "./style.css"

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
  useEffect(() => {
    carregarArtista(props.match.params.nome).then( r =>
        {   
            if (r.data.results.length === 1){
                setArtista(r.data.results[0]) 
                
            }
            else {
                alert("Não encontrado")
            }
        }
    )
  }, []);
  return(
      <div>
        <h1 className="titulo-principal">Artista</h1>

        <h2 className="nome-artista">{artista.nome}</h2>
          
      </div>
  )
      
}
 
export default Artistas;
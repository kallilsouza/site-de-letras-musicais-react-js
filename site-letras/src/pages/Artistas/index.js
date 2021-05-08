import {React, useState, useEffect} from "react";
import {
  NavLink
} from "react-router-dom";

import api from "../../services/api"

import CaixaArtista from "../../components/CaixaArtista"
import "./style.css"

const carregarArtistas = async () => {
  return api({
    method: 'get',
    url: '/artistas/',
    params: {
      ordem_alfabetica: true
    }
  })
}
 
const Artistas = () => {
  const [artistas, setArtistas] = useState([])
  useEffect(() => {
    carregarArtistas().then( r =>
      setArtistas(r.data.results)
    )
  }, []);
  return(
      <div>
        <h1 className="titulo-principal">Artistas</h1>   
        <div className="container-lista-artistas">
          <ul className="lista-artistas">
            {artistas.map((artista) => (
              <li className="lista-artistas-artista" key={artista.id}>
                <NavLink to={"/artista/"+artista.nome}>
                  <CaixaArtista artista={artista} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>     
      </div>
  )      
}
 
export default Artistas;
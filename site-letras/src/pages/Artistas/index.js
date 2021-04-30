import React from "react";

import api from "../../services/api"

const carregarArtistas = () => {
  api.get("/artistas/")
  .then(
    r => console.log(r)
  )
}
 
const Artistas = () => {
  carregarArtistas()
  return(
      <div>
        <h1 className="titulo-principal">Artistas</h1>        
      </div>
  )
      
}
 
export default Artistas;
import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="titulo-principal">Pagina inicial</h1>
        <div className="caixa-de-texto">
          <p>
            Bem-vindo ao Site de Letras. Por enquanto, não há muito o que ver por aqui.<br/>
            Novidades em breve. Aguarde!
          </p>
        </div>
      </div>
    );
  }
}
 
export default Home;
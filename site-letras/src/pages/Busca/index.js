import React, {useState, useEffect} from 'react'

import "./style.css"

const Busca = (props) => {
    const [termos, setTermos] = useState("")

    useEffect(() => {
        let termosURL = (props.location.search.split('termos='))[1]   
        if(typeof(termosURL) === 'undefined'){
            termosURL = ""
        }
        else{
            termosURL = (termosURL.split('&'))[0]
        }
        setTermos(decodeURIComponent(termosURL))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const inputs = {
        termos: {
            get: termos,
            set: setTermos,
        }
    }

    const onChange = (event) => {
        inputs[event.target.name].set(event.target.value)
    }

    const onSubmit = () => {
        
    }

    return (
        <div className="conteudo">
            <div className="container-form-busca">
                <h1 className="titulo-busca">Procure por letras, artistas e álbuns...</h1>
                <form className="form-busa" onSubmit={onSubmit}>
                    <input className="input-termos" type="text" name="termos" value={termos} onChange={onChange} />
                    <br />
                    <input className="input-submit" type="submit" value="buscar" />
                </form>
            </div>   
            <div className="resultados">

            </div>         
        </div>
    )
}

export default Busca

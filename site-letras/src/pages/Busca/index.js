import React, {useState, useEffect} from 'react'
import api from '../../services/api'

import "./style.css"

const realizarBusca = async ({termos, tipoBusca}) => {
    if(tipoBusca === 'letras'){
        return api({
            method: 'get',
            url: '/cancoes/',
            params: {
                nome: termos
            }
        })
    }
    else if(tipoBusca === 'artistas'){
        return api({
            method: 'get',
            url: '/artistas/',
            params: {
                nome: termos
            }
        })
    }
    else if(tipoBusca === 'albuns'){
        return api({
            method: 'get',
            url: '/albuns/',
            params: {
                nome: termos
            }
        })
    }
}

const Busca = (props) => {
    const [termos, setTermos] = useState("")
    const [tipoBusca, setTipoBusca] = useState("letras")
    
    const tiposBusca = ["letras", "artistas", "albuns"]

    useEffect(() => {
        let termosURL = (props.location.search.split('termos='))[1]   
        if(typeof(termosURL) === 'undefined'){
            termosURL = ""
        }
        else{
            termosURL = (termosURL.split('&'))[0]
        }
        setTermos(decodeURIComponent(termosURL))

        let tipoBuscaURL = (props.location.search.split('tipo_busca='))[1]  
        if(typeof(tipoBuscaURL) === 'undefined'){
            tipoBuscaURL = ""
        }
        else{
            tipoBuscaURL = (tipoBuscaURL.split('&'))[0]
        }
        if(tiposBusca.includes(tipoBuscaURL)){
            setTipoBusca(tipoBuscaURL)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const inputs = {
        "termos": {
            get: termos,
            set: setTermos,
        },
        "tipo-busca": {
            get: tipoBusca,
            set: setTipoBusca,
        }
    }

    const onChange = (event) => {
        inputs[event.target.name].set(event.target.value)
    }

    const onSubmit = (event) => {
        realizarBusca({termos: termos, tipoBusca:tipoBusca}).then(
            r => {
                console.log(r)
            }
        )
        event.preventDefault()
    }

    return (
        <div className="conteudo">
            <div className="container-form-busca">
                <h1 className="titulo-busca">
                    Procure por <span className={
                        tipoBusca === "letras" ? "tipo-busca-selecionada" : "tipo-busca"
                        } onClick={() => setTipoBusca("letras")}>
                            letras
                    </span>, <span className={
                        tipoBusca === "artistas" ? "tipo-busca-selecionada" : "tipo-busca"
                        } onClick={() => setTipoBusca("artistas")}>
                        artistas
                    </span> e <span className={
                        tipoBusca === "albuns" ? "tipo-busca-selecionada" : "tipo-busca"
                        } onClick={() => setTipoBusca("albuns")}>
                        albuns
                    </span>...
                </h1>
                <form className="form-busa" onSubmit={onSubmit}>
                    <input className="input-termos" type="text" name="termos" value={termos} onChange={onChange} />
                    <input type="hidden" name="tipo_busca" value={tipoBusca} />
                    <br/>
                    <input className="input-submit" type="submit" value="buscar" />
                </form>
            </div>   
            <div className="resultados">

            </div>         
        </div>
    )
}

export default Busca

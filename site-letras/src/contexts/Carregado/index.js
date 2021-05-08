import React from 'react'

export const CarregadoContext = React.createContext({})

const CarregadoProvider = (props) => {
    const [carregado, setCarregado] = React.useState(false)

    return (
        <CarregadoContext.Provider value={
            [carregado, setCarregado]
        }
        >
            {props.children}
        </CarregadoContext.Provider>
    )
}

export default CarregadoProvider
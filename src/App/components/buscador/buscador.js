import React from 'react'
import Datepicker from '../datepicker/datepicker'
import './buscador.scss'

const Buscador = () => {
  return (
    <div className='mainBuscador'>
        <div>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        </div>
        <form className='formBuscador'>
            <input type="text" />
            <Datepicker/>
            <button>BUSCAR</button>
        </form>
    </div>
  )
}

export default Buscador
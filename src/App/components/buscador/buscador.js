import React from 'react'
import Datepicker from '../datepicker/datepicker'
import Button from "../../components/button/button";
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
            <Button style="dark">BUSCAR</Button>
        </form>
    </div>
  )
}

export default Buscador
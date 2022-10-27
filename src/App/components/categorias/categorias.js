import React from 'react'
import Card from "../../components/card/card";
import categoriasJson from '../../data/categorias.json'
import './categorias.scss'

const Categorias = () => {
  return (
    <section className='categoriasSection'>
        <h2>Buscar por tipo de alojamiento</h2>
        <section className='categoriasGrid'>
            {categoriasJson.map(item =>
                <Card {...item}/>   
                )}
        </section>
    </section>
  )
}

export default Categorias
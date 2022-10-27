import React from 'react'
import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import data from '../../data/data.json'
import './listado.scss'

const Listado = () => {
    console.log(data)
  return (
    <section className='listadoSection'>
        <h2>Recomendaciones</h2>
        <div className='listadoGrid'>
            {data.map(item => <RecommendedCard {...item}/>)}
        </div>
    </section>
  )
}

export default Listado
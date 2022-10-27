import React from 'react'
import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import data from '../../data/data.json'

const Listado = () => {
    console.log(data)
  return (
    <section className='listadoSection'>
        <p>LISTADO</p>
        {data.map(item => <RecommendedCard {...item}/>)}
    </section>
  )
}

export default Listado
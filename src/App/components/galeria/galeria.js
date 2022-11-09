import React from 'react'
import './galeria.scss'
import ImgModal from '../modal/imgModal';


const Galeria = () => {

  const [modalOpen, setModalOpen] = React.useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }
  
  const images = [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1552566626-2d907dab0dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBiYXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
  ]

  return (
    <>
    <section className='imageGallery'>
      <div className='mainImgContainer'>
        <img className='mainImg' src={images[0]} alt="Main" onClick={openModal} />
      </div>
      <div className='otherImgsContainer'>
        {images.slice(1).map((i, index) => <img key={index} className='otherImg' onClick={openModal} src={i} alt="Other"/>)}
        {images.length > 5 ? <button className='verMasBtn' onClick={openModal}>Ver más</button> : null }
        
      </div>
    </section>
    <ImgModal show={modalOpen} onHide={closeModal} images={images}/>
    </>
  )
}

export default Galeria
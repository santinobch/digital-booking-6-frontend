import React from 'react'
import './galeria.scss'
import ImgModal from "../modal/imgModal";


const Galeria = ({images}) => {

  const [modalOpen, setModalOpen] = React.useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }

  return (
    <>
    <section className='imageGallery'>
      <div className='mainImgContainer'>
        <img className='mainImg' src={images[0].imagenUrl} alt={images[0].imagenTitulo} onClick={openModal} />
      </div>
      <div className='otherImgsContainer'>
        {images.slice(1,5).map((i, index) => <img key={index} className='otherImg' onClick={openModal} src={i.imagenUrl} alt={i.imagenTitulo}/>)}
        {images.length > 5 ? <button className='verMasBtn' onClick={openModal}>Ver más</button> : null }
        
      </div>
    </section>
    <ImgModal show={modalOpen} onHide={closeModal} images={images}/>
    </>
  )
}

export default Galeria
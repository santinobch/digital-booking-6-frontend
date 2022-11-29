import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import './mobileCarousel.scss'


export default function MobileCarousel({images}) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={null} nextIcon={null} prevIcon={null}>
        {images.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.imagenUrl}
                alt={item.imagenTitulo}
              />
            <span className="imgNumber" style={{ "textAlign": "end" }}>{(index + 1) + "/" + images.length}</span>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.scss'

const ImgCarousel = ({images}) => {
  return (
    <>
      <Carousel infiniteLoop showIndicators={false} statusFormatter={(currentItem, total) => `${currentItem}/${total}` } >
        {images?.map((item, idx) => (
              <img src={item.url} key={idx} alt="banner" objectPosition="center top" layout="fill" objectFit="cover" priority />
          ))}
      </Carousel>
    </>
  )
}

export default ImgCarousel

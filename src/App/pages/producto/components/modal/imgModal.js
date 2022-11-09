import React from 'react'
import { Modal } from 'react-bootstrap'
import MobileCarousel from '../carousel/carousel'
import './imgModal.scss'

export default function ImgModal({show, onHide, images}) {

    return (
        <div>
            <Modal
            show={show}
            centered
            size="lg"
        >
            <Modal.Body>
                <button className='closeBtn' onClick={onHide}>X</button>
                <MobileCarousel images={images}/>
            </Modal.Body>
        </Modal>
        </div>
    )
}
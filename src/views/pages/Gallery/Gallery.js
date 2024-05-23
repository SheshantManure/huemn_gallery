import React from 'react'
import style from './Gallery.module.scss'

import displayImage from '../../../assets/images/carousel/345_9546-Edit 2.svg'
import TextAnimation from '../../components/textAnimation/textAnimation.jsx/textAnimation.jsx'

const Gallery = () => {
  return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <div className={style.title}>
                <h1>Vijay Eesam</h1>
                <h4>Photo-film</h4>
            </div>
        </div>
        <div className={style.galleryContainer}>
            <div className={style.photoWrapper}>
                <div className={style.photoBy}>
                    <h1>Photos By: Sheshant Manure</h1>
                </div>
                <div className={style.photo}>
                    <img src={displayImage} alt='display' />
                </div>
                <div className={style.photoDesc}>
                    <h1>Arjun & Aanya</h1>
                    <div className={style.line}></div>
                    <h4>May 5, 2024</h4>
                </div>
            </div>
        </div>
        <TextAnimation/>
    </div>
  )
}

export default Gallery
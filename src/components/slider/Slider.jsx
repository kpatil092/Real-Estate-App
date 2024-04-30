import React, { useState } from 'react'
import "./slider.scss"

function Slider({ images }) {

    const [imgIndex, setImgIndex] = useState(null);

    const changeSlide = (direction) => {
        if(direction === "left") {
            setImgIndex((images.length + imgIndex - 1) % images.length)
        } else {
            setImgIndex((imgIndex + 1) % images.length)
        }
    }

    return (
        <div className='slider'>
            {(imgIndex !== null) &&
                (<div className="fullSlider">
                    <div className="arrow">
                        <img
                            src="/arrow.png"
                            alt="arrow"
                            onClick={() => changeSlide("left")}
                        />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imgIndex]} alt="img" />
                    </div>
                    <div className="arrow">
                        <img
                            src="/arrow.png"
                            alt="arrow"
                            className='right'
                            onClick={() => changeSlide("right")}
                        />
                    </div>
                    <div className="close" onClick={() => setImgIndex(null)}>X</div>
                </div>)
            }
            <div className="bigImage">
                <img
                    src={images[0]}
                    alt="img"
                    onClick={() => setImgIndex(0)}
                />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img
                        src={image}
                        alt="img"
                        key={index}
                        onClick={() => setImgIndex(index + 1)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
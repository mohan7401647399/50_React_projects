import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import './style.css'

const ImageSlider = ({ url, limit = 10, page = 1 }) => {

    const [image, setImage] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImage(data)
                setLoading(false)
            }

        } catch (err) {
            setErrorMsg(err.message)
            setLoading(false)
        }
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1)
    }
    const handleNext = () => {
        setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    if (loading) return <div>Loading data ! Please wait</div>

    if (errorMsg !== null) return <div>Error Occured {errorMsg} </div>

    return (
        <div className='container'>
            <BsArrowLeftCircle onClick={handlePrevious} className='arrow arrow-left' />
            {
                image && image.length ?
                    image.map((imageItem, index) => (
                        <img src={imageItem.download_url}
                            alt={imageItem.download_url}
                            key={imageItem.id}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    ))
                    : null
            }
            <BsArrowRightCircle onClick={handleNext} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    image && image.length ? image.map((_, index) => (
                        <button
                            onClick={() => setCurrentSlide(index)}
                            key={index}
                            className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}
                        >
                        </button>
                    )) : null
                }
            </span>
        </div>
    )
}

export default ImageSlider

import { useState, useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Slider = ({ url, limit, page }) => {

    const [images, setImages] = useState([])
    const [currentSlider, setCurrentSlider] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl){

        try{
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if(data){
                setImages(data)
                setLoading(false)
            }
        }
        
        catch(e){

        }
    }

    function handlePrevious(){
      setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
    }

    function handleNext(){
      setCurrentSlider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
    }

    useEffect(() => {
        if(url !== '') fetchImages(url)
    }, [url])

    console.log(images)

    if(loading){
      return(
          <section>
      <div className="card">
        <h2>Image Slider</h2>
            <div className='warning mt-24'>Loading data ! Please wait</div>
      </div>
    </section>
      )
    }

    if(errorMsg !== null){
        return (
            <section>
            <div className="card">
              <h2>Image Slider</h2>
            <div className='incorrect mt-24'>Error accured ! {errorMsg}</div>
            </div>
          </section>
        )
    }

  return (
    <section>
      <div className="card">
        <h2>Image Slider</h2>
        <div className="card-body slider">
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
            {images && images.length ? images.map((imageItem, index) => (
                <img key={imageItem.id} alt={imageItem.download_url} src={imageItem.download_url} className={currentSlider === index ? 'current-image' : 'current-image update-current-image'} />
                )) : null}
                <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
                <span className='circle-indicators'>
                    {
                        images && images.length ?  images.map((_, index) => (
                            <button onClick={() => setCurrentSlider(index)} key={index} className={currentSlider === index ? 'current-indicator' : 'current-indicator inactive-indicator'}></button>
                            )) : null
                    }
                </span>
        </div>
      </div>
    </section>
  )
}

export default Slider

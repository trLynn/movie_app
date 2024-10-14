import { useEffect, useState } from 'react'
import { baseApi } from '../../api/axiosInstance'
import { CarouselMovie } from '../../utils/constant'
import HomeCarousel from './HomeCarousel'
import HomeCarouselList from './HomeCarouselList'
import HomecarouselSkeleton from '../Skeleton/HomecarouselSkeleton'

interface SliderEvent extends Event {
  from: number;
  to: number;
  direction: string;
  relatedTarget: HTMLElement;
}

const HomeSlider = () => {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([])
  const [selected, setSelected] = useState(0)
  const [next, setNext] = useState<number[]>([])

  useEffect(() => {
    if (carouselMovies.length) {
      const id1 = (selected + 1) % carouselMovies.length
      const id2 = (selected + 2) % carouselMovies.length
      const id3 = (selected + 3) % carouselMovies.length
      setNext([id1, id2, id3]);
    }
  }, [carouselMovies, selected])

  useEffect(() => {
    const myCarousel = document.getElementById("carouselExample")
    const handleSlide = (event: SliderEvent) => {
      setSelected(event.to)
    }
    if (myCarousel) {
      myCarousel.addEventListener('slid.bs.carousel', handleSlide as EventListener)
      return () => {
        myCarousel.removeEventListener('slid.bs.carousel', handleSlide as EventListener)
      }
    }
  })

  const fetchUpcoming = async () => {
    try {
      const response = await baseApi.get("/3/movie/upcoming?language=en-US&page=1")
      setCarouselMovies(response.data.results)
    } catch (err) {
      console.log("fetch upcoming movies error", err)
    }
  }
  useEffect(() => {
    fetchUpcoming()
  }, [])

  return (
    <div className='row'>
      <div className='relative col-xl-8'>
        {
          carouselMovies.length > 0 ?
            <div id="carouselExample" className="carousel slide h-full">
              <HomeCarousel carouselMovies={carouselMovies} />
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            :
            <HomecarouselSkeleton />
        }
      </div>
      <div className='col-xl-4 lg:block hidden'>
        <HomeCarouselList next={next} carouselMovies={carouselMovies} />
      </div>
    </div>
  )
}

export default HomeSlider
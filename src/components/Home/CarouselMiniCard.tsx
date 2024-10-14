import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselMovie, imagepath } from '../../utils/constant'
import { FiThumbsUp } from 'react-icons/fi'

interface CarouselMiniCardProps {
    carouselMovies: CarouselMovie[]
    item: number
    id: number
}

const CarouselMiniCard = ({ carouselMovies, item, id }: CarouselMiniCardProps) => {
    const [hover, setHover] = useState<number | null>(null)

    return (
        <Link to={`/details/${carouselMovies[item].id}`} className='col-xl-12 col'>
            <div key={id} className='flex gap-2'
                onMouseEnter={() => setHover(id)}
                onMouseLeave={() => setHover(null)}
            >
                <img src={imagepath + carouselMovies[item]?.poster_path} className='w-[100px] aspect-[4/6]' alt='' />
                <div className='flex flex-col justify-content-between py-2'>
                    <div className='leading-5'>
                        <h1 className={`${hover === id ? "underline" : ""}`}>{carouselMovies[item]?.title}</h1>
                        <h1 className='text-md text-zinc-300 line-clamp-3'>{carouselMovies[item]?.overview}</h1>
                    </div>
                    <div className='flex gap-1 text-center'>
                        <FiThumbsUp />
                        <h2>{carouselMovies[item]?.vote_count}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CarouselMiniCard
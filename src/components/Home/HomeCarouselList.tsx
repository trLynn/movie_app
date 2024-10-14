import { CarouselMovie } from '../../utils/constant'
import CarouselMiniCardSkeleton from '../Skeleton/CarouselMiniCardSkeleton'
import CarouselMiniCard from './CarouselMiniCard'

interface HomeCarouselListProps {
    next: number[]
    carouselMovies: CarouselMovie[]
}

const HomeCarouselList = ({ next, carouselMovies }: HomeCarouselListProps) => {

    return (
        <>
            <h1 className='font-bold text-xl text-yellow-500'>Up Next</h1>
            <div className='row'>
                {
                    carouselMovies.length > 0 ?
                    next.map((item, id) => (
                        <CarouselMiniCard carouselMovies={carouselMovies} item={item} id={id} />
                    ))
                    :
                    [...Array(3)].map(item =>
                        <CarouselMiniCardSkeleton />
                    )
                }
            </div>
        </>
    )
}

export default HomeCarouselList
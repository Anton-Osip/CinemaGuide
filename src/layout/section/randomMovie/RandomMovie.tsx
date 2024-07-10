import {s} from "./RandomMovie_styles"
import {FilmType} from "../../../data/films";
import {Rating} from "../../../components/rating/Rating";


type RandomMoviePropsType = { film: FilmType }
export const RandomMovie: React.FC<RandomMoviePropsType> = ({film}: RandomMoviePropsType) => {
    return <s.RandomMovie>
        <s.Image src = {film.posterUrl} alt = {film.title}/>
        <s.Info>
            <Rating rating = {7}/>
        </s.Info>
    </s.RandomMovie>
}


import {s} from "./RandomMovie_styles"
import {FilmType} from "../../../data/films";
import {Rating} from "../../../components/rating/Rating";
import {FlexWrapper} from "../../../components/utils/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/utils/Container";


type RandomMoviePropsType = { film: FilmType }
export const RandomMovie: React.FC<RandomMoviePropsType> = ({film}: RandomMoviePropsType) => {
    return <s.RandomMovie>
        <s.Image src = {film.backdropUrl} alt = {film.title}/>

        <Container>
            <s.Info>
                <FlexWrapper align = {'center'} gap = {'16px'}>
                    <Rating rating = {film.tmdbRating}/>
                    <s.Text>{film.releaseYear}</s.Text>
                    <s.Text>{film.genres[0]}</s.Text>
                    <s.Text>{film.runtime} min</s.Text>
                </FlexWrapper>
                <s.Title>{film.title}</s.Title>
                <s.Description>{film.plot}</s.Description>
                <FlexWrapper align = {'center'} justify = {'space-between'} gap = {'8px'} wrap = {'wrap'}>
                    <Button mode = {'secondary'} isIcon = {false}>Трейлер</Button>
                    <Button mode = {'primary'} isIcon = {false}>О фильме</Button>
                    <Button mode = {'primary'} isIcon = {true}>
                        <Icon idIcon = {'hardIcon'} width = "24" height = "24"
                              viewBox = "0 0 24 24" color = {'#fff'}/>
                    </Button>
                    <Button mode = {'primary'} isIcon = {true}>
                        <Icon idIcon = {'newMoviesIcon'} width = "24" height = "24"
                              viewBox = "0 0 24 24" color = {'#fff'}/>
                    </Button>

                </FlexWrapper>
            </s.Info>
        </Container>
    </s.RandomMovie>
}


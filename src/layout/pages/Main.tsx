import {RandomMovie} from "../section/randomMovie/RandomMovie";
import {FilmType} from "../../data/films";

type MainPropsType={films:FilmType[]}

export const Main: React.FC<MainPropsType> = ({films}:MainPropsType) => {
    return <><RandomMovie film={films[0]} /></>
}
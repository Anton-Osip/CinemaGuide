import {s} from "./Rating_styles"
import {Icon} from "../icon/Icon";

type RatingPropsType = {
    rating: number
}


export const Rating: React.FC<RatingPropsType> = ({rating}: RatingPropsType) => {
    return (
        <s.Block value = {rating}>
            <Icon idIcon = {'ratingIcon'} color = {'#fff'} width = "10" height = "10" viewBox = "0 0 10 10"/>
            <s.Rating>{rating}</s.Rating>
        </s.Block>)
}
import IconsSprite from '../../assets/image/icons-sprite.svg'

type IconPropsType = {
    width?: string
    height?: string
    viewBox?: string
    color?: string
    idIcon: string
}

export const Icon: React.FC<IconPropsType> = ({
                                                  idIcon,
                                                  width,
                                                  height,
                                                  viewBox,
                                                  color,
                                              }: IconPropsType) => {
    return (
        <svg
            width = {width || '50'}
            height = {height || '50'}
            viewBox = {viewBox || '0 0 50 50'}
            fill = {color || 'none'}
            xmlns = "http://www.w3.org/2000/svg"
        >
            <use xlinkHref = {`${IconsSprite}#${idIcon}`}/>
        </svg>
    )
}
type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({
                         family,
                         weight,
                         color,
                         lineHeight,
                         Fmax,
                         Fmin,
                     }: FontPropsType) =>
    `font-family:${family || 'Play'};
	font-weight:${weight || 400};
	line-height:${lineHeight || 1.2};
	color:${color || '#fff'};
	font-size:calc( (100vw - 335px)/(1280 - 335) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`
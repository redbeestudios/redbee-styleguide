import React from 'react';

import * as S from './P.styles';


type Props ={
    align:'center'|'right'|'left',
    font:'primary'|'secondary',
    type:'1'| '2'| '3'| '4'| '5'| '6',
    variant:'primary'|'secondary-1'|'secondary-2'| 'secondary-3'|'neutral'|'neutral-1'|'danger'|'warning'|'info'|'success',
    weight:'regular'|'bold',
    modifier:'regular'|'strong'|'weak'|'inverted',
    children:any
}

const P = (props:Props) =>{
    const { align, children, font, type, variant, weight, modifier } = props;
    return <S.P
        align={align}
        font={font}
        type={type}
        variant={variant}
        weight={weight}
        modifier={modifier}
        as='p'
    >
        {children}
    </S.P>
}

;

P.defaultProps = {
    align: 'left',
    font: 'primary',
    type: '1',
    variant: 'primary',
    weight: 'regular',
    modifier: 'regular',
};



export default P;

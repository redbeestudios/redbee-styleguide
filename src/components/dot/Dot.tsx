import React from 'react';
import * as S from './Dot.styles';

const defaultProps = {

    variant:'neutral',
    modifier:'regular'

}

type DotProps = {
    variant?:'regular'| 'strong'| 'weak'| 'inverted',
    modifier?:'danger'|'info'|'warning'| 'success'
}

const Dot = (props:DotProps) =>{
    const {variant,modifier} = props;
    return <S.Dot variant={variant} modifier={modifier} />
}

Dot.defaultProps= defaultProps;

export default Dot;
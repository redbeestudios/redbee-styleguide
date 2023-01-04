import React from 'react';
import * as S from './Span.styles';

type SpanProps =  {
    id?:string
    font?: 'primary'| 'secondary',
    type?: "1"|"2"|"3"|"4"|"5"|"6",
    variant?:string| 'primary'| 'secondary-1'|'secondary-2'|'secondary-3'| 'neutral'|'neutral-1'|'danger'|'warning'|'info'|'success',
    weight?: 'regular'| 'bold',
    modifier?: 'regular'|'strong'|'weak'|'inverted',
    children?:any
    
}

const defaultProps ={
    font:'primary',
    type:'1',
    variant:'primary',
    weight:'regular',
    modifier:'regular'
}

 const Span=(props:SpanProps)=>{

    
    const {font,type,variant,weight,modifier} = props                    
    return <S.Span
    font={font}
    type={type}
    variant={variant}
    weight={weight}
    modifier={modifier}
>
    {props.children}
</S.Span>
};

Span.defaultProps= defaultProps;

export default Span
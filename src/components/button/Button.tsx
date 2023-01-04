import React from 'react';
import * as S from './Button.styles';
import Icon from "../icon/Icon";


const defaultProps ={
    variant:'primary' as 'primary'|'secondary',
    size: 'lg' as 'sm' | 'md' | 'lg',
    disabled: false,
    animated: false,
    iconAlign: 'none' as 'center'| 'left'| 'right'| 'none',
    type: 'button'as 'button'| 'reset'| 'submit',

};

type ButtonProps = {

    onClick?: () => void,
    children?:any,
    icon?:string,
    id?:string,
    fullWidth?:boolean,
    testId?:string,
} & typeof defaultProps



const Button = (props: ButtonProps) => {
    const {id,size,variant,children,onClick,disabled,icon,type,fullWidth,iconAlign} =props;

    const renderIcon = () => {
        const iconSizes = {
            sm: 20,
            md: 24,
            lg: 28,
            'full-md': 20,
        };

        return (
            <Icon
                cursor={disabled ? 'not-allowed' : 'pointer'}
                variant={variant === 'primary' ? 'neutral' : 'primary'}
                name={icon}
                width={iconSizes[size]}
                height={iconSizes[size]}
            />
        );
    };

    return (

        <S.Button
            data-testid={id}
            id={id}
            disabled={disabled}
            size={size}
            variant={variant}
            type={type}
            onClick={onClick}
            fullwidth={fullWidth}
            icon={icon}
            iconAlign={iconAlign}
        >
            {icon && (iconAlign === 'left' || iconAlign === 'center') && renderIcon()}
            {children}
            {icon && iconAlign === 'right' && renderIcon()}
        </S.Button>

);
};

Button.defaultProps=defaultProps;

export default Button
import React from 'react';
import Label from '../texts/label/Label';
import Checkbox from '../checkBox/CheckBox';
import * as S from './MultiSelect.styles';


export type OptionProps ={
    value:string,
    isDisabled:boolean,
    isSelected:boolean,
    label:string,
    icon:string
}
type MultiSelectOptionsInnerProps ={
    onClick?:(option)=>void;
    options:Array<OptionProps>
}

const MultiSelectOption = (props:MultiSelectOptionsInnerProps) => {
    const {onClick, options}= props
 return   <>
        {options.map((option) => (
            <S.MultiSelectMenuContainer
                key={option.value}
                disabled={option.isDisabled}
                onClick={() => !option.isDisabled && onClick(option)}
            >
                <S.MultiSelectCheckboxContainer>
                    <Checkbox
                        checked={option.isSelected}
                        disabled={option.isDisabled ? true : false}
                        onChange={(e) => e.preventDefault}
                        id={option.value}
                    />
                </S.MultiSelectCheckboxContainer>
                {option?.icon && (
                    <S.MultiSelectMenuImageContainer disabled={option.isDisabled}>
                        <img src={option?.icon} alt={option.label}/>
                    </S.MultiSelectMenuImageContainer>
                )}
                <S.MultiSelectLabelContainer>
                    <Label
                        type='4'
                        variant='neutral'
                        modifier={option.isDisabled ? 'weak' : 'strong'}
                        weight='regular'
                    >
                        {option.label}
                    </Label>
                </S.MultiSelectLabelContainer>
            </S.MultiSelectMenuContainer>
        ))}
    </>
};
export default MultiSelectOption;
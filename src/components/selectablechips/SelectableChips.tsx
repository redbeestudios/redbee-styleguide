import React, { useState, useEffect } from 'react';
import * as S from './SelectableChips.styles';
import Chip from '../chip/Chip';
import Checkbox from '../checkBox/CheckBox';
import P from '../texts/p/P';

type OptionProps ={
    active:boolean,
    text:string,
    value:string
}

type SelectableChipProps ={
    direction:'column'|'row',
    disabled:boolean,
    multiSelect:boolean,
    selectAll:boolean,
    onChange:(value)=>void,
    options:Array<OptionProps>

}

const SelectableChips = (props:SelectableChipProps) => {

    const {
        direction,
        options,
        onChange,
        multiSelect,
        selectAll,
        disabled,
    } = props
    const [list, setList] = useState(options);

    const handleOnClick = (text) => {
        let toggleActiveList = list.map((itemChip) => {
            let isItemSelected =
                (itemChip.value ? itemChip.value : itemChip.text) === text;
            if (multiSelect) {
                return isItemSelected
                    ? { ...itemChip, active: !itemChip.active }
                    : { ...itemChip };
            } else {
                return { ...itemChip, active: isItemSelected };
            }
        });
        setList(toggleActiveList);
        onChange(toggleActiveList);
    };

    const quantitySelected = list.filter(({ active }) => active).length;

    const handleSelectAll = () => {
        let toggleSelectAllList = list.map((itemChip) => ({
            ...itemChip,
            active: quantitySelected === 0,
        }));
        setList(toggleSelectAllList);
        onChange(toggleSelectAllList);
    };

    const SelectAll = () => {
        return (
            <Checkbox
                id='select-all'
                checked={quantitySelected > 0}
                onChange={disabled ? undefined : handleSelectAll}
                isSelectAllCheck
                size='sm'
                disabled={disabled}
            >
                <P variant='neutral' modifier='strong' type='2' align='left'>
                    {quantitySelected === 0 && 'Seleccionar todos'}
                    {quantitySelected === 1 && `${quantitySelected} Seleccionado`}
                    {quantitySelected > 1 && `${quantitySelected} Seleccionados`}
                </P>
            </Checkbox>
        );
    };

    useEffect(() => {
        setList(options);
    }, [options]);

    const chips = list.map((item) => {
        return (
            <S.ChipWrapper key={item.text}>
                <Chip
                    active={item.active}
                    text={item.text}
                    value={item.value}
                    onClick={handleOnClick}
                    disabled={disabled}
                />
            </S.ChipWrapper>
        );
    });

    return (
        <S.ChipsContainer>
            {multiSelect && selectAll && <SelectAll />}
            <S.SelectableChips direction={direction}>{chips}</S.SelectableChips>
        </S.ChipsContainer>
    );
};

SelectableChips.defaultProps = {
    direction: 'row',
    multiSelect: false,
    selectAll: false,
    disabled: false,
};


export default SelectableChips;

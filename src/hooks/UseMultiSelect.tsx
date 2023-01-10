import { useState } from 'react';
import { OptionProps } from '../components/multiselect/MultiSelectOption.Inner';

const UseMultiSelect = (
  options: Array<OptionProps>,
  initialValue,
  OPTION_ALL
) => {
  const [values, setValues] = useState(initialValue);

  const indexAllOption = values.findIndex((e) => e === OPTION_ALL.value);

  const checkOption = (option: OptionProps) => {
    if (option.value === OPTION_ALL.value) {
      if (values.length > 0) {
        setValues([]);
      } else {
        setValues(options.map(({ value }) => value));
      }
    } else {
      const oldOption = optionsObject[option.value];
      if (oldOption.isSelected) {
        setValues((prevState) => [
          ...prevState.slice(0, oldOption.currentIndex),
          ...prevState.slice(oldOption.currentIndex + 1),
        ]);
      } else {
        if (indexAllOption >= 0) {
          setValues((prevState) =>
            Array.from(
              new Set([
                ...prevState.slice(0, indexAllOption),
                ...prevState.slice(indexAllOption + 1),
                option.value,
              ])
            )
          );
        } else {
          setValues((prevState) =>
            Array.from(new Set([...prevState, option.value]))
          );
        }
      }
    }
  };

  const optionsObject = options.reduce((acc, b) => {
    const currentIndex = values.findIndex((e) => e === b.value);
    return {
      ...acc,
      [b.value]: { ...b, isSelected: currentIndex >= 0, currentIndex },
    };
  }, {});

  return {
    values: Object.values(optionsObject),
    setValues,
    checkOption,
  };
};

export default UseMultiSelect;

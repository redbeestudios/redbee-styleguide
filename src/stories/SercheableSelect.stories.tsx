import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchableSelect from '../components/sercheableselect/SearchableSelect';

export default {
  title: 'Example/select/SercheableSelect',
  component: SearchableSelect,
} as ComponentMeta<typeof SearchableSelect>;

const options = [
  { value: '00331068889', label: '00331068889' },
  { value: '00331068823', label: '00331068823' },
  { value: '00331157889', label: '00331157889' },
  { value: '00331847381', label: '00331847381' },
  { value: '00336898765', label: '00336898765' },
  { value: '00336893457', label: '00336893457' },
  { value: '00442343457', label: '00442343457' },
  { value: '00338712873', label: '00338712873' },
  { value: '00339485801', label: '00339485801' },
  { value: '00339485802', label: '00339485802' },
];

const Template: ComponentStory<typeof SearchableSelect> = (args) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleOnChange = (searchWord) => {
    const newFilter = options.filter((value) => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  args.options = options;
  args.onChange = handleOnChange;
  args.maxLength = 4;
  args.placeholder = 'Enter a Number';

  return <SearchableSelect {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  maxLength: 6,
};

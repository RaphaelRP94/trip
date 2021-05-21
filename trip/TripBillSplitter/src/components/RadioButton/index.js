import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Option, Text } from './styles';

const RadioButton = ({ options, onSelect, value }) => {
  return options && options.map(option => (
    <TouchableOpacity key={option.key} onPress={() => onSelect(option.key)}>
        <Option selected={value === option.key}>
          <Text>{option.text}</Text>
        </Option>
    </TouchableOpacity>
  ))
  
}

export default RadioButton;
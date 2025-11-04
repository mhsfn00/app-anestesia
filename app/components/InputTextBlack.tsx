import React from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../constants/colors';

type InputProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
}

const InputTextBlack = ({ label, value, onChangeText }: InputProps) => {
  return (
    <TextInput
        mode='outlined'
        label={label}
        value={value}
        onChangeText={onChangeText}
        outlineColor='black'
        activeOutlineColor='black'
        style={{ 
            backgroundColor: colors.backgroundDefault,
            flexGrow: 1,
            width: 100
        }}
    />
  )
}

export default InputTextBlack;
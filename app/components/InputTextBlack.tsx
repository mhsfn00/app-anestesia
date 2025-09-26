import React from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../constants/colors';

type InputProps = {
    label: string;
}

const InputTextBlack = ({ label }: InputProps) => {
  return (
    <TextInput
        mode='outlined'
        label={label}
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
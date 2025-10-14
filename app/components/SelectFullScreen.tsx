import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { colors } from '../constants/colors';
import DefaultActions from './DefaultActions';

type SelectProps = {
    options: { label: string, value: boolean }[],
    title: string,
    handleCancel: () => void,
    handleSave: () => void,
    display: boolean
}

export default function SelectFullScreen({ options, title, handleCancel, handleSave, display }: SelectProps) {
  return (
    <View style={[styles.fullScreenContainer, { display: display ? 'flex' : 'none'}]}>
        <Text>{title}</Text>
        {options.map((option, index) => (
            <Checkbox.Item
                key={index}
                label={option.label}
                status={option.value ? "checked" : "unchecked"}
                onPress={() => {}}
                labelStyle={{ fontSize: 16, fontWeight: '500', color: '#333' }}
                color={colors.bluePrimary}
            />
        ))}
        <DefaultActions
            greenButtonIcon='check'
            greenButtonlabel='Salvar'
            onGreenPress={handleSave}
            redButtonIcon='x'
            redButtonLabel='Cancelar'
            onRedPress={handleCancel}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    fullScreenContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 11,
        backgroundColor: 'lightblue'
    }
})

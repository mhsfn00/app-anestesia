import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { colors } from '../constants/colors';
import DefaultActions from './DefaultActions';

export default function SelectFullScreen() {
  return (
    <View style={styles.fullScreenContainer}>
        <Checkbox.Item
            label="Comorb 1"
            status='unchecked'
            onPress={() => {}}
            labelStyle={{ fontSize: 16, fontWeight: '500', color: '#333' }}
            color={colors.bluePrimary}
        />
        <DefaultActions
            greenButtonIcon='check'
            greenButtonlabel='Salvar'
            onGreenPress={() => {console.log('Avançar')}}
            redButtonIcon='x'
            redButtonLabel='Cancelar'
            onRedPress={() => {console.log('Voltar')}}
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

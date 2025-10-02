import React from 'react';
import { View } from 'react-native';
import SecondaryButton from './SecondaryButton';

export default function DefaultActions() {
    return (
        <View className='flex-row w-full justify-between my-8'>
            <View className='w-2/5'>
                <SecondaryButton
                title='Voltar'
                leftIcon='arrowLeft'
                color='redPrimary'
                customJustify='center'
                onPress={() => {}}
            />
            </View>
            <View className='w-2/5'>
                <SecondaryButton
                title='Avançar'
                rightIcon='arrowRight'
                color='greenPrimary'
                customJustify='center'
                onPress={() => {}}
            />
            </View>
        </View>
    )
}
import React from 'react';
import { View } from 'react-native';
import SecondaryButton from './SecondaryButton';

type DefaultActionProps = {
    onGreenPress?: () => void;
    onRedPress?: () => void;
    greenButtonlabel?: string;
    redButtonLabel?: string;
    greenButtonIcon?: 'arrowRight' | 'check';
    redButtonIcon?: 'arrowLeft' | 'x';
}

export default function DefaultActions({ 
    onGreenPress = () => {}, 
    onRedPress = () => {},
    greenButtonlabel = 'Avançar',
    redButtonLabel = 'Voltar',
    greenButtonIcon = 'arrowRight',
    redButtonIcon = 'arrowLeft' 
}: DefaultActionProps) {
    return (
        <View className='flex-row w-full justify-between my-8'>
            <View className='w-2/5'>
                <SecondaryButton
                title={redButtonLabel}
                leftIcon={redButtonIcon}
                color='redPrimary'
                customJustify='center'
                onPress={onRedPress}
            />
            </View>
            <View className='w-2/5'>
                <SecondaryButton
                title={greenButtonlabel}
                rightIcon={greenButtonIcon}
                color='bluePrimary'
                customJustify='center'
                onPress={onGreenPress}
            />
            </View>
        </View>
    )
}
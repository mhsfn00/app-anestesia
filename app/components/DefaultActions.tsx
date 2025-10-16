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
    customJustify?: "center" | "between";
}

export default function DefaultActions({ 
    onGreenPress = () => {}, 
    onRedPress = () => {},
    greenButtonlabel = 'Avançar',
    redButtonLabel = 'Voltar',
    greenButtonIcon = 'arrowRight',
    redButtonIcon = 'arrowLeft',
    customJustify = "between" 
}: DefaultActionProps) {
    return (
        <View className='flex-row w-full justify-between my-8' 
            style={{justifyContent: customJustify === "center" ? "center" : "space-between"}}>
            <View className='w-2/5' style={{display: customJustify === "center" ? "none" : "flex"}}>
                <SecondaryButton
                title={redButtonLabel}
                leftIcon={redButtonIcon}
                connotation='cancel'
                customJustify='center'
                onPress={onRedPress}
            />
            </View>
            <View className='w-2/5'>
                <SecondaryButton
                title={greenButtonlabel}
                rightIcon={greenButtonIcon}
                connotation='save'
                customJustify='center'
                onPress={onGreenPress}
            />
            </View>
        </View>
    )
}
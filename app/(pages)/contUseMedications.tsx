import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import DefaultActions from '../components/DefaultActions';
import SecondaryButton from '../components/SecondaryButton';
import SelectFullScreen from '../components/SelectFullScreen';
import { antiAggregantOptions, antiArrhythmicOptions, antiCoagulantOptions } from '../stores/options';
import { useAnesthStore } from '../stores/useAnesthStore';

export default function ContUseMedications() {
    const antiArrhythOptions = useAnesthStore(state => state.antiArrhythmics);
    const setAntiArrhythOptions = useAnesthStore(state => state.setAntiArrhythmics);
    const antiArrythCount = antiArrhythOptions.filter(arh => arh.value).length;

    const antiCoagOptions = useAnesthStore(state => state.antiCoagulants);
    const setAntiCoagOptions = useAnesthStore(state => state.setAntiCoagulants);
    const antiCoagCount = antiCoagOptions.filter(acg => acg.value).length;

    const antiPlateletsOptions = useAnesthStore(state => state.antiPlatelets);
    const setAntiPlateletsOptions = useAnesthStore(state => state.setAntiPlatelets);
    const antiPlateletsCount = antiPlateletsOptions.filter(apl => apl.value).length;

    const [showArrhythSelect, setShowArrhythSelect] = useState(false);
    const [showCoagSelect, setShowCoagSelect] = useState(false);
    const [showAgregSelect, setShowAgregSelect] = useState(false);
    return (
        <View className="flex-1 justify-center items-center mx-6 gap-12">
            <Text className='font-semibold text-xl'>
                Medicações de uso contínuo
            </Text>
            <View className="w-full gap-6">
                <SecondaryButton
                    title='Antiarrítmico'
                    connotation='save'
                    leftIcon='pill'
                    rightNumber={antiArrythCount}
                    onPress={() => setShowArrhythSelect(!showArrhythSelect)}
                />
                <SecondaryButton
                    title='Anticoagulante Oral'
                    connotation='save'
                    leftIcon='pill'
                    rightNumber={antiCoagCount}
                    onPress={() => setShowCoagSelect(!showCoagSelect)}
                />
                <SecondaryButton
                    title='Antiagregante Plaquetário'
                    connotation='save'
                    leftIcon='pill'
                    rightNumber={antiPlateletsCount}
                    onPress={() => setShowAgregSelect(!showAgregSelect)}
                />
            </View>
            {showArrhythSelect && (
                <SelectFullScreen 
                    options={antiArrhythmicOptions}
                    onChangeOptions={(selected) => setAntiArrhythOptions(selected)}
                    onClose={() => setShowArrhythSelect(false)}
                    title="Antiarrítmicos"
                />
            )}
            {showCoagSelect && (
                <SelectFullScreen 
                    options={antiCoagulantOptions}
                    onChangeOptions={(selected) => setAntiCoagOptions(selected)}
                    onClose={() => setShowCoagSelect(false)}
                    title="Anticoagulantes Orais"
                />
            )}
            {showAgregSelect && (
                <SelectFullScreen 
                    options={antiAggregantOptions}
                    onChangeOptions={(selected) => setAntiPlateletsOptions(selected)}
                    onClose={() => setShowAgregSelect(false)}
                    title="Antiagregantes Plaquetários"
                />
            )}
            <DefaultActions
                greenButtonIcon="check"
                greenButtonlabel="Voltar"
                onGreenPress={router.back}
                customJustify="center"
            />
        </View>
    );
}

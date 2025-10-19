import { useState } from 'react';
import { Text, View } from 'react-native';
import SecondaryButton from '../components/SecondaryButton';
import SelectFullScreen from '../components/SelectFullScreen';
import { antiArrhythmicOptions } from '../stores/options';
import { useAnesthStore } from '../stores/useAnesthStore';

export default function ContUseMedications() {
    const antiArrhythOptions = useAnesthStore(state => state.antiArrhythmics);
    const setAntiArrhythOptions = useAnesthStore(state => state.setAntiArrhythmics);
    const antiarrythCount = antiArrhythOptions.filter(arh => arh.value).length;

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
                    rightNumber={antiarrythCount}
                    onPress={() => setShowArrhythSelect(!showArrhythSelect)}
                />
                <SecondaryButton
                    title='Anticoagulante Oral'
                    connotation='save'
                    leftIcon='pill'
                    rightNumber={0}
                    onPress={() => setShowCoagSelect(!showCoagSelect)}
                />
                <SecondaryButton
                    title='Antiagregante Plaquetário'
                    connotation='save'
                    leftIcon='pill'
                    rightNumber={0}
                    onPress={() => setShowAgregSelect(!showAgregSelect)}
                />
            </View>
            <SelectFullScreen 
                display={showArrhythSelect}
                options={antiArrhythmicOptions}
                onChangeOptions={(selected) => setAntiArrhythOptions(selected)}
                onClose={() => setShowArrhythSelect(false)}
                title="Antiarrítmicos"
            />
        </View>
    );
}

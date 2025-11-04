import React, { useState } from 'react';
import { Text, TextStyle, View } from 'react-native';
import { Checkbox, SegmentedButtons } from 'react-native-paper';
import DefaultActions from '../components/DefaultActions';
import DropDown from '../components/DropDown';
import TextInputBlack from '../components/InputTextBlack';
import SecondaryButton from '../components/SecondaryButton';
import SelectFullScreen from '../components/SelectFullScreen';
import { colors } from '../constants/colors';

import { router } from 'expo-router';
import { comorbidityOptions } from '../stores/options';
import { useAnesthStore } from '../stores/useAnesthStore';

const timeOptions = [
  { label: "< 60 minutos", value: "t<60"},
  { label: "1 - 2 horas", value: "1<t<2"},
  { label: "2 - 4 horas", value: "2<t<4"},
  { label: "> 4 horas", value: "4<t"}
]

const genderLabelStyle: TextStyle = { fontSize: 14, fontWeight: 700 };

const Dosage = () => {
  const calculate = () => {
    /* to print all the data so far */

    const infoForDosageCalculation = {
      "person": {
        "personsIdentification": personsIdentification,
        "personsAge": personsAge,
        "personsWeight": personsWeight,
        "pregnancy": pregnancy
      },
      "comorbidities": comorbOptions,
      "continuousMedications": continuousMedications,
      "expectedTime": expectedTime
    }

    console.log(JSON.stringify(infoForDosageCalculation, null, 2));
  }

  const comorbOptions = 
    useAnesthStore(state => state.comorbidities)
    .filter(o => o.value);
  const continuousMedications = 
    useAnesthStore(state => state.antiArrhythmics)
    .concat(useAnesthStore(state=> state.antiCoagulants))
    .concat(useAnesthStore(state=> state.antiPlatelets))
    .filter(o => o.value);

  const setComorbOptions = useAnesthStore(state => state.setComorbidities);
  const comorbCount = comorbOptions.filter(cmb => cmb.value).length
  const continuousMedCount = useAnesthStore(state => 
    state.antiArrhythmics.filter(o => o.value).length +
    state.antiCoagulants.filter(o => o.value).length +
    state.antiPlatelets.filter(o => o.value).length
  )

  const [pregnancy, setPregnancy] = useState(false);
  const [gender , setGender] = useState<string>("");
  const [personsIdentification,  setPersonsIdentification] = useState<string>("");
  const [personsAge, setPersonsAge] = useState<string>("");
  const [personsWeight, setPersonsWeight] = useState<string>("");
  const [expectedTime, setExpectedTime] = useState<string>("");
  
  const [showComorbSelect, setShowComorbSelect] = useState(false);
  const genderButtons = [
    { value: 'female', 
      label: 'Feminino',  
      checkedColor: gender === 'female' ? 'white' : undefined, 
      style: { 
        borderRadius: 5, 
        backgroundColor: gender === 'female' ? colors.bluePrimary : 'transparent',
        padding: 4
      },
      labelStyle: genderLabelStyle
    },
    { value: 'male', 
      label: 'Masculino', 
      checkedColor: gender === 'male' ? 'white' : undefined, 
      style: { 
        backgroundColor: gender === 'male' ? colors.bluePrimary : 'transparent',
        padding: 4
      },
      labelStyle: genderLabelStyle
    },
    { value: 'other', 
      label: 'Outro', 
      checkedColor: gender === 'other' ? 'white' : undefined, 
      style: { 
        borderRadius: 5, 
        backgroundColor: gender === 'other' ? colors.bluePrimary : 'transparent',
        padding: 4
      },
      labelStyle: genderLabelStyle
    }
  ];

  return (
    <View className='flex-1 justify-between mx-6'>
      <View className='gap-6'>
        <View className='flex-row'>
          <TextInputBlack
            label='Identificação do Paciente'
            value={personsIdentification}
            onChangeText={setPersonsIdentification}
          />
        </View>
        <View className='flex-row gap-5'>
          <TextInputBlack
            label='Idade'
            value={personsAge}
            onChangeText={setPersonsAge}
          />
          <TextInputBlack
            label='Peso (Kg.g)'
            value={personsWeight}
            onChangeText={setPersonsWeight}
          />
        </View>
        <View className='flex-col w-full'>
          <SecondaryButton
            title='Medicação de Uso Contínuo'
            connotation='save'
            leftIcon='pillBottle'
            rightNumber={continuousMedCount}
            onPress={() => router.navigate('/contUseMedications')}
          />
          <SecondaryButton
            title='Outras Comorbidades'
            connotation='save'
            leftIcon='heartPulse'
            rightNumber={comorbCount}
            onPress={()=>setShowComorbSelect(!showComorbSelect)}
          />
        </View>
        <View className='flex-row'>
          <DropDown
            data={timeOptions}
            placeholder='Tempo aproximado de sutura'
            value={expectedTime}
            onChange={(item) => setExpectedTime(item.value)}
          />
        </View>
        <View className='flex-col w-full'>
          <Text className='font-bold text-md text-center pb-4'>Gênero do Paciente</Text>
          <SegmentedButtons
            value={gender}
            onValueChange={setGender}
            buttons={genderButtons}
          />
          {(gender === 'female' || gender === 'other') &&
            <View style={{ borderWidth: 1, borderRadius: 5, marginVertical: 16 }}>
            <Checkbox.Item
              label="Gestante"
              status={pregnancy ? 'checked' : 'unchecked'}
              onPress={() => {setPregnancy(!pregnancy)}}
              labelStyle={{ fontSize: 16, fontWeight: '500', color: '#333' }}
              color={colors.bluePrimary}
            />
          </View>}
        </View>
      </View>
      
      {showComorbSelect && (
        <SelectFullScreen
          options={comorbidityOptions}
          onChangeOptions={(selected) => setComorbOptions(selected)}
          onClose={() => setShowComorbSelect(false)}
          title="Comorbidades"
        />
      )}

      <DefaultActions
        onGreenPress={calculate}
        onRedPress={router.back}
      />
    </View>
  )
}

export default Dosage;
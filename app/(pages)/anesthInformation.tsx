import React, { useState } from 'react';
import { Text, TextStyle, View } from 'react-native';
import { Checkbox, SegmentedButtons } from 'react-native-paper';
import DefaultActions from '../components/DefaultActions';
import DropDown from '../components/DropDown';
import TextInputBlack from '../components/InputTextBlack';
import SecondaryButton from '../components/SecondaryButton';
import SelectFullScreen from '../components/SelectFullScreen';
import { colors } from '../constants/colors';

const comorbOptions = [
  { label: "Doença hepática crônica", value: false },
  { label: "Doença renal crônica", value: false },
  { label: "Diabetes Mellitus", value: false },
  { label: "Doença Respiratória crônica (DPOC/asma grave)", value: false },
  { label: "Epilepsia", value: false }
]

const timeOptions = [
  { label: "< 60 minutos", value: "t<60"},
  { label: "1 - 2 horas", value: "1<t<2"},
  { label: "2 - 4 horas", value: "2<t<4"},
  { label: "> 4 horas", value: "4<t"}
]

const genderLabelStyle: TextStyle = { fontSize: 14, fontWeight: 700 };

const Dosage = () => {
  const [gestante, setGestante] = useState(false);
  const [showComorbSelect, setShowComorbSelect] = useState(false);
  const [gender , setGender] = useState<string>("");

  const handleComorbSave = () => {
    console.log(comorbOptions);
    setShowComorbSelect(!showComorbSelect);
  }

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
          />
        </View>
        <View className='flex-row gap-5'>
          <TextInputBlack
            label='Idade'
          />
          <TextInputBlack
            label='Peso (Kg.g)'
          />
        </View>
        <View className='flex-col w-full'>
          <SecondaryButton
            title='Medicação de Uso Contínuo'
            connotation='save'
            leftIcon='pillBottle'
            rightNumber={0}
            onPress={()=>{}}
          />
          <SecondaryButton
            title='Outras Comorbidades'
            connotation='save'
            leftIcon='heartPulse'
            rightNumber={0}
            onPress={()=>{setShowComorbSelect(!showComorbSelect)}}
          />
        </View>
        <View className='flex-row'>
          <DropDown
            data={timeOptions}
            placeholder='Tempo aproximado de sutura'
            onChange={()=>{}}
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
              status={gestante ? 'checked' : 'unchecked'}
              onPress={() => {setGestante(!gestante)}}
              labelStyle={{ fontSize: 16, fontWeight: '500', color: '#333' }}
              color={colors.bluePrimary}
            />
          </View>}
        </View>
      </View>
      
      <SelectFullScreen
        display={showComorbSelect}
        options={comorbOptions}
        title="Comorbidades"
        handleSave={handleComorbSave}
        handleCancel={() => {setShowComorbSelect(!showComorbSelect)}}
      />

      <DefaultActions
        onGreenPress={() => {console.log('Avançar')}}
        onRedPress={() => {console.log('Voltar')}}
      />
    </View>
  )
}

export default Dosage;
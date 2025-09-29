import React from 'react';
import { Text, View } from 'react-native';
import DropDown from '../components/DropDown';
import TextInputBlack from '../components/InputTextBlack';
import SecondaryButton from '../components/SecondaryButton';

const timeOptions = [
  { label: "< 60 minutos", value: "t<60"},
  { label: "1 - 2 horas", value: "1<t<2"},
  { label: "2 - 4 horas", value: "2<t<4"},
  { label: "> 4 horas", value: "4<t"}
]

const Dosage = () => {
  return (
    <View className='flex-col justify-center items-center mx-6 bg-green-200 gap-3'>
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
          color='bluePrimary'
          leftIcon='pillBottle'
          rightNumber={0}
          onPress={console.log}
        />
        <SecondaryButton
          title='Outras Comorbidades'
          color='bluePrimary'
          leftIcon='heartPulse'
          rightNumber={0}
          onPress={()=>{}}
        />
      </View>
      <View className='flex-row'>
        <DropDown
          data={timeOptions}
          placeholder='Tempo aproximado de sutura'
          onChange={()=>{}}
        />
      </View>
      <View className='flex-row'>
        <Text>Gênero do Paciente</Text>
      </View>
    </View>
  )
}

export default Dosage;
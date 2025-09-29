import React from 'react';
import { View } from 'react-native';
import DropDown from '../components/DropDown';
import TextInputBlack from '../components/InputTextBlack';

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
      <View className='flex-row'>
        <DropDown
          data={timeOptions}
          placeholder='Tempo aproximado de sutura'
          onChange={console.log}
        />
      </View>
    </View>
  )
}

export default Dosage;
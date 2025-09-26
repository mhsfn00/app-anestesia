import React from 'react';
import { View } from 'react-native';
import TextInputBlack from '../components/InputTextBlack';

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
        <TextInputBlack 
          label='Tempo aproximado de sutura'
        />
      </View>
    </View>
  )
}

export default Dosage;
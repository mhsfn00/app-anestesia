import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Checkbox, SegmentedButtons } from 'react-native-paper';
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
  const [gender , setGender] = useState<string>("");

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
          onPress={()=>{}}
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
      <View className='flex-col w-full'>
        <Text>Gênero do Paciente</Text>
        <SegmentedButtons
          value={gender}
          onValueChange={setGender}
          buttons={[
            { value: 'female', label: 'Feminino', showSelectedCheck: true, checkedColor: 'white', 
              style: { borderRadius: 5, backgroundColor: gender === 'female' ? "blue" : 'transparent'}},
            { value: 'male', label: 'Masculino', showSelectedCheck: true, checkedColor: 'white', 
              style: { backgroundColor: gender === 'male' ? "blue" : 'transparent'}},
            { value: 'other', label: 'Outro', showSelectedCheck: true, checkedColor: 'white', 
              style: { borderRadius: 5, backgroundColor: gender === 'other' ? "blue" : 'transparent'}}
          ]}
        />
        <Checkbox.Item 
          label="Gestante" 
          status="unchecked" 
        />
      </View>
      <View className='flex-row w-full justify-between'>
        <SecondaryButton 
          title='Voltar'
          leftIcon='arrowLeft'
          color='redPrimary'
          onPress={() => {}}
        />
        <SecondaryButton 
          title='Avançar'
          rightIcon='arrowRight'
          color='greenPrimary'
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default Dosage;
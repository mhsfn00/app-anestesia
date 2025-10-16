import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { colors } from '../constants/colors';
import DefaultActions from './DefaultActions';

type Option = {
  label: string;
  value: boolean;
};

type SelectProps = {
  options: Option[];
  onChangeOptions: (newOptions: Option[]) => void;
  title: string;
  display: boolean;
  onClose: () => void;
};

export default function SelectFullScreen({
  options,
  onChangeOptions,
  title,
  display,
  onClose,
}: SelectProps) {
  const changeOptionValue = (index: number) => {
    const newOptions = [...options];
    newOptions[index].value = !newOptions[index].value;
    onChangeOptions(newOptions);
  };

  return (
    <View
      style={[
        styles.fullScreenContainer,
        { display: display ? 'flex' : 'none' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>

      <View style={styles.checkboxContainer}>
        {options.map((option, index) => (
          <Checkbox.Item
            key={index}
            label={option.label}
            status={option.value ? 'checked' : 'unchecked'}
            onPress={() => changeOptionValue(index)}
            labelStyle={styles.label}
            color={colors.bluePrimary}
          />
        ))}
      </View>

      <DefaultActions
        greenButtonIcon="check"
        greenButtonlabel="Voltar"
        onGreenPress={onClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 11,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  checkboxContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

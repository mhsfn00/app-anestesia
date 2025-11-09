import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { colors } from '../constants/colors';
import { Option } from '../stores/useAnesthStore';
import DefaultActions from './DefaultActions';

type SelectProps = {
  options: Option[];
  onChangeOptions: (newOptions: Option[]) => void;
  title: string;
  onClose: () => void;
};

export default function SelectFullScreen({
  options,
  onChangeOptions,
  title,
  onClose,
}: SelectProps) {
  const [localOptions, setLocalOptions] = useState<Option[]>(options);

  const changeOptionValue = useCallback((index: number) => {
    setLocalOptions(prev => {
      const updated = [...prev];
      updated[index].value = !updated[index].value;
      return updated;
    });
  }, []);

  const handleSave = () => {
    onChangeOptions(localOptions);
    onClose();
  };

  const renderItem = useCallback(
    ({ item, index }: { item: Option; index: number }) => (
      <Checkbox.Item
        label={item.label}
        status={item.value ? 'checked' : 'unchecked'}
        onPress={() => changeOptionValue(index)}
        labelStyle={styles.label}
        color={colors.bluePrimary}
      />
    ),
    [changeOptionValue]
  );

  return (
    <View style={styles.fullScreenContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={localOptions}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <DefaultActions
        greenButtonIcon="check"
        greenButtonlabel="Voltar"
        onGreenPress={handleSave}
        customJustify='center'
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
  listContainer: {
    paddingBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 26,
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

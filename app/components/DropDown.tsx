import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type OptionItem = { value: number; label: string};

interface DropDownProps {
    data: OptionItem[];
    onChange: (item: OptionItem) => void;
    placeholder: string;
    value: number;
}

export default function DropDown({ data, onChange, placeholder, value }: DropDownProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
    const selectedLabel = data.find(item => item.value === value)?.label || placeholder;

    const onSelect = useCallback((item: OptionItem) => {
        onChange(item);
        setExpanded(false);
    }, [onChange]);

    return (
        <View>
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8} 
                onPress={toggleExpanded}
            >
                <Text style={styles.text}>
                    {selectedLabel}
                </Text>
                <AntDesign name={ expanded ? "caret-up" : "caret-down" } />
            </TouchableOpacity>
            { expanded ? (
                <View style={styles.options}>
                    <FlatList
                        keyExtractor = {(item) => item.value.toString()}
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={styles.optionsItem}
                                onPress={() => onSelect(item)}
                            >
                                <Text>{ item.label }</Text>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                </View>
            ) : null }
        </View>   
)}

const styles = StyleSheet.create({
    optionsItem: {
        height: 50,
        justifyContent: "center",
        borderWidth: 0.5,
        paddingLeft: 16 
    },
    separator: {
        height: 0
    },
    options: {
        position: "absolute",
        top: 53,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 6,
        maxHeight: 250,
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        zIndex: 10
    },
    text: {
        fontSize: 15,
        opacity: 0.8
    },
    button: {
        height: 50,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 4,
        borderWidth: 1,
        marginVertical: 6
    }
})

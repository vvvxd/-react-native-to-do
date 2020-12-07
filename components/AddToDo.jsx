import React from 'react';
import {Button, StyleSheet, TextInput, View,Alert} from 'react-native';

const AddToDo = ({onSubmit}) => {
  const [value, setValue] = React.useState('');
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else{
     Alert.alert('Название дела не может быть пустым');
    }
  }
  
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        autoCorrect={false}
        placeholder={'Введите название дела ...'}
      />
      <Button onPress={pressHandler} title='Добавить'/>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
})

export default AddToDo;

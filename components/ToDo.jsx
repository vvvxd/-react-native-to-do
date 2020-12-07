import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const ToDo = ({todo,onRemove}) => {
  return (
    <TouchableOpacity
      onPress={()=>console.log('press')}
      onLongPress={()=>onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  
  );
};


const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginTop: 15,
  }
});


export default ToDo;

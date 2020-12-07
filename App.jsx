import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Navbar from './components/Navbar';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  
  const addToDo = (title) => {
    setTodos((predTodos) => [
        ...predTodos,
        {
          id: Date.now().toString(),
          title
        }
      ]
    )
  }
  
  const removeTodo = (id) => {
    setTodos(prev => prev.filter(elem => elem.id !== id))
  }
  
  return (
    <View>
      <Navbar title='To Do !'/>
      <View style={styles.container}>
        <AddToDo onSubmit={addToDo}/>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({item}) =>
            <ToDo onRemove={removeTodo} todo={item}/>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
});

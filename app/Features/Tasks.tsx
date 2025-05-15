import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import useTaskStore from './Store'

const Tasks = () => {

    const tasks = useTaskStore((state) => state.tasks);

     const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <View>
        <Text style={{ fontSize: 20, padding: 20 }}>Your Tasks:</Text>
                <ScrollView style={{ padding: 20, paddingHorizontal: 0 }}>
                  {tasks.map((task) => (
                    <View
                      style={{
                        height: 'auto',
                        marginBottom: 10,
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: 10,
                        padding: 20,
                        justifyContent: "space-between",
                        flexDirection: 'row', 
                        alignItems: 'center',
                        minHeight: 70
                        
                      }}
                       key={task.id}
                    >
                      <Text
                       
                        style={{  color: "black", fontSize: 18, textAlign: 'center' }}
                      >
                        {task.title}
                      </Text >
                        <TouchableOpacity onPress={() => deleteTask(task.id)} >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({})
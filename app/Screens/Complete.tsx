import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import useTaskStore from '../Features/Store'

const Complete = () => {

  const completedTasks = useTaskStore((state) => state.tasks);

  return (
    <View>
      <Text>Complete</Text>
      <ScrollView style={{ padding: 20, paddingHorizontal: 0 }}>
        {completedTasks.map((task) => (
          <View
            style={{
              height: "auto",
              marginBottom: 10,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              minHeight: 70,
            }}
            key={task.id}
          >
            <Text style={{ color: "black", fontSize: 18, textAlign: "center" }}>
              {task.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  )
}

export default Complete

const styles = StyleSheet.create({})
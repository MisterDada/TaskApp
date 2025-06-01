import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {useCompletedTaskStore} from '../Features/Store'

const Complete = () => {

  const completedTasks = useCompletedTaskStore((state) => state.completedTasks);


  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center"}}>
        <Text style={{ fontSize: 25, padding: 20 }}>Completed Tasks</Text>
      </View>
      
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
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import useTaskStore from "../Features/Store";
import React from "react";

const createTask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = useTaskStore((state) => state.addTask);

  const handleTaskNameChange = (text: React.SetStateAction<string>) => {
    setTaskName(text);
  };

  const handleTaskDescriptionChange = (text: React.SetStateAction<string>) => {
    setTaskDescription(text);
  };

  const handleAdd = () => {
    if (taskName.trim() !== "") {
      addTask({
        id: Date.now(),
        title: taskName,
        completed: false
      });
      setTaskName("");
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25 }}>Add Task</Text>
      </View>
      <ScrollView>
        <View style={{ padding: 20, paddingHorizontal: 30 }}>
          <TextInput
            placeholder="Task Name"
            placeholderTextColor={"grey"}
            multiline={true}
            onChangeText={handleTaskNameChange}
            value={taskName}
            style={{
              borderColor: "grey",
              borderRadius: 5,
              padding: 10,
              marginBottom: 20,
              height: 50,
              fontSize: 18,
              backgroundColor: "white",
            }}
          />
          <TextInput
            placeholder="Task Description"
            placeholderTextColor={"grey"}
            multiline={true}
            numberOfLines={4}
            onChangeText={handleTaskDescriptionChange}
            value={taskDescription}
            style={{
              borderColor: "grey",
              borderRadius: 5,
              padding: 10,
              marginBottom: 20,
              height: 100,
              fontSize: 18,
              backgroundColor: "white",
            }}
          />
          <TouchableOpacity onPress={handleAdd}>
            <View
              style={{
                backgroundColor: "#4a90e2",
                padding: 15,
                borderRadius: 56,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Add Task</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default createTask;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f2f5ff",
    paddingTop: 30,
  },
  header: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

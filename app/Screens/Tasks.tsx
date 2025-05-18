import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useTaskStore from "../Features/Store";

const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeTask = useTaskStore((state) => state.completeTask);

  return (
    <View>
      <ScrollView style={{ padding: 20, paddingHorizontal: 0 }}>
        {tasks.map((task) => (
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
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => deleteTask(task.id)}
                style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
              >
                <Text style={{ color: "white" }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => completeTask(task.id)}
                style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
              >
                <Text style={{ color: "white" }}>Complete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});

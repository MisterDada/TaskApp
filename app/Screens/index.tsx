import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import React from "react";
import Tasks from "../Features/Tasks";
import LottieView from "lottie-react-native";

const Index = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let timeOfDay;
  let greeting;
  if (hours < 12) {
    timeOfDay = "Morning";
    greeting = "Ready to plan your day?";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    greeting =  "Hope you're having a great day!";
  } else {
    timeOfDay = "Evening";
    greeting = "Hope you had a great day!";
  }
  console.log(timeOfDay);

  return (
    <View style={styles.main}>
      <View style={styles.greetingHeader}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.Text}>Hello, Good {timeOfDay}!</Text>
        <Text style={styles.greeting}>{greeting}</Text>
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
          <LottieView
        source={require('../assets/icons8-sun.json')}
        autoPlay
        loop
        style={{ width: 50, height: 50 }}
      />
          <Text style={{fontSize: 25}} >{hours}:{minutes}</Text>
        </View>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity>
          <View style={styles.tabStyles}>
            <Text style={styles.Text}>My Tasks</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tabStyles}>
            <Text style={styles.Text}>Completed</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tasks}>
        <Tasks />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f2f5ff",
    paddingTop: 50,
  },
  greetingHeader: {
    paddingHorizontal: 30,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Text: {
    color: "black",
    fontSize: 20,
  },
  greeting: {
    color: "grey",
    fontSize: 15,
    marginTop: 5,
    fontWeight: "light",
  },
  tabs: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  tabStyles: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 58.5,
    borderColor: "black",
    width: 122,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  tasks: {
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    paddingBottom: 20,
    height: "100%",
  },
});

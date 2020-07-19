import React from "react";
import {
  View,
  ActivityIndicator,
  Button,
  Alert,
  Dimensions,
  Text,
  Platform,
  ProgressViewIOS,
  ProgressBarAndroid,
  StyleSheet,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button pressed`);
  };
  return (
    <View style={styles.page}>
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} />}
      {Platform.OS === "android" && <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="blue" progress={0.5} />}

      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" onPress={onButtonPress} />
      <Text style={styles.text}>OS: {Platform.OS}</Text>
      <Text style={[styles.text, styles.selectedText]}>Height: {height}</Text>
      <Text style={styles.text}>Width: {width}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor : "#DDD"
  },
  text: {
    fontSize: 22,
    color:"red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "red",
  }
})
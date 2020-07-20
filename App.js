import React, { useState } from "react";
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
  Image,
  TouchableHighlight,
} from "react-native";

import picSplash from "./assets/splash.png";

const { height, width } = Dimensions.get("window");

export default function App() {
  // const onButtonPress = () => {
  //   Alert.alert(`${new Date().toLocaleTimeString()} button pressed`);
  // };
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    // <View style={styles.page}>
    //   {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} />}
    //   {Platform.OS === "android" && <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="blue" progress={0.5} />}

    //   <ActivityIndicator size="large" color="#61DBFB" />
    //   <Button title="click me" onPress={onButtonPress} />
    //   <Text style={styles.text}>OS: {Platform.OS}</Text>
    //   <Text style={[styles.text, styles.selectedText]}>Height: {height}</Text>
    //   <Text style={styles.text}>Width: {width}</Text>
    //   <Image style={styles.image} source={picSplash} />
    // </View>
    <View style={[styles.container, { backgroundColor }]}>
      {/* <Text style={styles.button} onPress={() => setBackgroundColor("green")}>
        green
      </Text>
      <Text style={styles.button} onPress={() => setBackgroundColor("red")}>
        red
      </Text> */}
      <TouchableHighlight style={styles.btn} onPress={() => setBackgroundColor("yellow")} underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor: "yellow" }]} />
          <Text style={styles.btnText}>yellow</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor: "#DDD",
  },
  text: {
    fontSize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5,
  },
  selectedText: {
    backgroundColor: "red",
  },
  image: {
    resizeMode: "center",
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    width: "90%",
    height: 60,
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
  btn: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255, .8)",
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
  },
  sample: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  }
});

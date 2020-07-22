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
  FlatList,
  SwipeableFlatList,
  AsyncStorage,
} from "react-native";

import picSplash from "./../assets/splash.png";
import defaultColors from "./../data/defaultColors.json";
import ColorForm from "./../components/ColorForm";

import { generate } from "shortid";

const { height, width } = Dimensions.get("window");

const ColorButton = ({ backgroundColor, onPress = (f) => f }) => {
  return (
    <TouchableHighlight
      style={styles.btn}
      onPress={() => onPress(backgroundColor)}
      underlayColor="orange"
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor }]} />
        <Text style={styles.btnText}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  );
};



const useColors = () => {
  const [colors, setColors] = useState([]);

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
    if (colorData) {
      const colors = JSON.parse(colorData);
      setColors(colors);
    }
  };

  React.useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  React.useEffect(() => {
    AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = (color) => {
    const newColor = { id: generate(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};


export default function ColorList({ navigation }) {
  // const onButtonPress = () => {
  //   Alert.alert(`${new Date().toLocaleTimeString()} button pressed`);
  // };
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colors, addColor } = useColors();



  return (
    // practice for view and basic knowledge
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

    // practice for components
    // <View style={[styles.container, { backgroundColor }]}>
    //   {/* <Text style={styles.button} onPress={() => setBackgroundColor("green")}>
    //     green
    //   </Text>
    //   <Text style={styles.button} onPress={() => setBackgroundColor("red")}>
    //     red
    //   </Text> */}
    //   <ColorButton backgroundColor="red" onPress={setBackgroundColor} />
    //   <ColorButton backgroundColor="green"  onPress={setBackgroundColor} />
    //   <ColorButton backgroundColor="blue"  onPress={setBackgroundColor} />
    //   <ColorButton backgroundColor="yellow"  onPress={setBackgroundColor} />
    //   <ColorButton backgroundColor="purple"  onPress={setBackgroundColor} />
    // </View>
    <>
      <ColorForm onNewColor={addColor} />
      
      <FlatList
        style={[styles.listContainer]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={() => {navigation.navigate("Details", { color: item.color })}}
            />
          );
        }}
      />
    </>
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
  },
  listContainer: {
    flex: 1,
    display: "flex",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import Typing from "./Typing.json";

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView autoPlay style={{ width: "100%" }} source={Typing} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

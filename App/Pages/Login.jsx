import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../Assets/Constants/Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Assets/Constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
const Login = () => {
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "830437171763-dbccfgh814db3j2gsp6kmofh5aibcbna.apps.googleusercontent.com",
    expoClientId:
      "830437171763-dmrt8uoujkp7hlntflr4vpj3rqskpmbk.apps.googleusercontent.com",
  });
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: screenWidth,
          height: screenHeight * 0.3,
          resizeMode: "stretch",
        }}
        source={require("./../Assets/Images/image 13.png")}
      />
      <View
        style={{
          backgroundColor: "#fff",
          height: 100,
          width: screenWidth,
          borderRadius: 25,
          marginTop: -20,
        }}
      ></View>
      <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome to</Text>
      <Text style={{ textAlign: "center", fontSize: 50, fontWeight: "bold" }}>
        WIZELINE
      </Text>
      <Text style={{ textAlign: "center", marginTop: 50, fontWeight: "bold" }}>
        Login/SignUp
      </Text>
      <View></View>
      <View></View>
      <Pressable
        onPress={() => promptAsync()}
        style={{
          padding: 10,
          width: 200,
          backgroundColor: Colors.primary,
          marginTop: 30,
          alignItems: "center",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <AntDesign name="google" size={24} color="#fff" />

        <Text style={{ color: "#fff" }}>Sign in with Google</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import axios from "axios";
import { useState } from "react";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRole } from "../../../context/RoleProvider";

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setIsAdmin} = useRole()

  const onPress = async () => {
    axios
      .post("https://fwa-ec-quiz-mock1.herokuapp.com/v1/auth/login", {
        username: email,
        password: password,
      })
      .then((response) => {
        let accessToken = AsyncStorage.setItem(
          "accessToken",
          response.data.tokens.access.token
        );
        console.log(response.data.user.role)
        if(response.data.user.role == "admin"){
          setIsAdmin(true)
        }
        else{
          navigation.navigate("Home Screen")
        }
        alert("success");        
      })
      .catch((error) => {
        alert(error);
      });
  };

  //console.log(role)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.9]}
        colors={["#3550DC", "#27E9F7"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Text style={styles.welcomeBackText}>Welcome Back!</Text>

          <View style={styles.emailTextInput}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <View style={styles.emailTextInput}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <TouchableOpacity style={styles.logInButton} onPress={onPress}>
            <Text style={styles.logInButtonText}> LOG IN</Text>
          </TouchableOpacity>

          <Text
            style={styles.forgotPasswordText}
            onPress={() => alert("forgot password pressed")}
          >
            Forgot Password?
          </Text>

          <View style={styles.signUpButtonView}>
            <Text style={styles.signUpText}>
              DON'T HAVE AN ACCOUNT?
              <Text
                onPress={() => navigation.navigate("Sign Up Screen")}
                style={{ color: "black" }}
              >
                {" "}
                SIGN UP
              </Text>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

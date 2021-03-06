import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomeScreen_admin from "./Home Screen/HomeScreen"
import CreateUserScreen from "./Create User Screen/CreateUserScreen"
import GetUserScreen from "./Get User Screen/GetUserScreen"
import CreateQuestionScreen from "./Create Question Screen/Quiz Test/CreateQuestion";
import DeleteQuestionScreen from "./Delete Question/DeleteQuestionScreen";
import UpdateQuestionScreen from "./Update Question/UpdateQuestionScreen";
import QuestionScreen from "./Update Question/Question Screen/QuestionScreen";
const Stack = createNativeStackNavigator()

const StackNavigator =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen_admin}/>
            <Stack.Screen name="Create New User" options={{ headerShown: true }} component={CreateUserScreen}/>
            <Stack.Screen name="Get User" options={{ headerShown: true }} component={GetUserScreen}/>
            <Stack.Screen name="Create Question" options={{ headerShown: true }} component={CreateQuestionScreen}/>
            <Stack.Screen name="Delete Question" options={{ headerShown: true }} component={DeleteQuestionScreen}/>
            <Stack.Screen name="Update Question" options={{ headerShown: true }} component={UpdateQuestionScreen}/>
            <Stack.Screen name="Question Screen" options={{ headerShown: true }} component={QuestionScreen}/>



        </Stack.Navigator>
    );
};

const AdminNavigator = () => {
    return <StackNavigator/>;
};
export default AdminNavigator;
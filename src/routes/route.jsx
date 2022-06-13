import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';

const Stack = createNativeStackNavigator();

const Route = () => {
  const { signed } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={signed ? "Home" : "Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Route;

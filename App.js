import { NavigationContainer } from "@react-navigation/native";
import { LogBox, StatusBar } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import { initializeFirebase } from "./src/firebase/firebase";
import Route from "./src/routes/route";

export default function App() {
  initializeFirebase();
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="auto" />
        <Route />
      </AuthProvider>
    </NavigationContainer>
  );
}

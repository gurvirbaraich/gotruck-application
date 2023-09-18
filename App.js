import { useFonts } from "expo-font";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import ScreenManager from "./ScreenManager";
import AuthProvider from "./contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/poppins.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <StatusBar
        translucent={true}
        style={Platform.OS == "android" ? "inverted" : "dark"}
        backgroundColor="rgba(0,0,0,0.4)"
      />
      <ScreenManager />
    </AuthProvider>
  );
}

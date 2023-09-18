import { useContext } from "react";
import { Button, SafeAreaView } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export default function HomeScreen() {
  const { logOut } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Button title="Logout" onPress={logOut} />
    </SafeAreaView>
  );
}

import { useContext } from "react";

import AuthScreen from "./AuthScreen";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const { logIn } = useContext(AuthContext);

  const navigateToSignUpScreen = function () {
    navigation.navigate("SignUp");
  };

  return (
    <AuthScreen
      onSubmit={logIn}
      screenHeading="Login"
      linkTag={"Don't have an account?"}
      onLinkTagPress={navigateToSignUpScreen}
    />
  );
}

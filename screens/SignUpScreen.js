import { useContext } from "react";

import AuthScreen from "./AuthScreen";
import { AuthContext } from "../contexts/AuthContext";

export default function SignUpScreen({ navigation }) {
  const { logIn: signUp } = useContext(AuthContext);

  const navigateToLoginScreen = function () {
    navigation.goBack();
  };

  return (
    <AuthScreen
      onSubmit={signUp}
      screenHeading={"SignUp"}
      linkTag={"Have an account?"}
      onLinkTagPress={navigateToLoginScreen}
    />
  );
}

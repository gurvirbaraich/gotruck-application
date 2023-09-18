import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AuthScreen({
  screenHeading,
  linkTag,
  onSubmit,
  onLinkTagPress,
}) {
  return (
    <View style={styles.screen}>
      {/* A container to hold background image in place. */}
      <View style={styles.imageBackground}>
        <Image
          style={styles.backgroundImage}
          src="https://res.cloudinary.com/dzs1jeraj/image/upload/v1694708384/download_xg8lc5.jpg"
        />
      </View>

      {/* Form Component  */}
      <View style={styles.formComponent}>
        <View>
          <Text style={styles.formHeading}>{screenHeading}</Text>
          <Text style={styles.formSubHeading}>
            Please enter your details below to continue.
          </Text>
        </View>

        <View>
          <TextInput
            spellCheck={false}
            autoCapitalize={"none"}
            style={styles.formInput}
            placeholder="baraichgurvir@gmail.com"
          />
          <TextInput
            spellCheck={false}
            autoCapitalize={"none"}
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="••••••••"
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={onSubmit ?? (() => {})}
            style={styles.formButton}
          >
            <Text style={styles.formButtonText}>{screenHeading}</Text>
          </TouchableOpacity>

          <Text
            onPress={onLinkTagPress ?? (() => {})}
            style={styles.formActionLink}
          >
            {linkTag}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  imageBackground: {
    flex: 2,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },

  formComponent: {
    flex: 1,
    padding: 20,
    height: "100%",
    marginTop: -30,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  formHeading: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    fontFamily: "poppins",
  },
  formSubHeading: {
    marginTop: 5,
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "poppins",
  },
  formInput: {
    padding: 10,
    marginBottom: 10,
    fontFamily: "poppins",
    backgroundColor: "#F2F2F2",
  },
  formButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#2b2d42",
  },
  formButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "poppins",
  },
  formActionLink: {
    marginTop: 10,
    color: "#241E4E",
    fontFamily: "poppins",
  },
});

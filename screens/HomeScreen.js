import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import JobSearchInput from "../components/JobSearchInput";

export default function HomeScreen() {
  return (
    <View>
      {/* Welcome section */}
      <View style={styles.welcomeSection}>
        <SafeAreaView>
          <View style={styles.welcomeContainer}>
            <View>
              <Text style={styles.welcomeText}>Welcome, </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.username}
              >
                Gurvir Singh Baraich
              </Text>
            </View>
            <Image
              tintColor={"#FFFFFF"}
              style={styles.notificationIcon}
              source={require("../assets/images/notification.png")}
            />
          </View>
        </SafeAreaView>
      </View>

      {/* Job search component */}
      <View style={styles.jobSearchInputContainer}>
        <JobSearchInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeSection: {
    backgroundColor: "#2D2D34",
  },
  welcomeContainer: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 60,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  welcomeText: {
    color: "#FFFFFF",
    fontFamily: "poppins",
  },
  username: {
    fontSize: 24,
    maxWidth: "75%",
    color: "#FFFFFF",
    fontFamily: "poppins",
  },

  jobSearchInputContainer: {
    marginTop: -30
  }
});

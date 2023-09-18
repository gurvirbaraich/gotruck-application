import { Image, StyleSheet, TextInput, View } from "react-native";

export default function JobSearchInput() {
  return (
    <View style={styles.jobSearchInputSection}>
      <View style={styles.jobSearchInputContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../assets/images/search.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Job, Company, etc..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  jobSearchInputSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  jobSearchInputContainer: {
    padding: 10,
    minWidth: "85%",
    maxWidth: "85%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  searchIcon: {
    left: 15,
    width: 20,
    height: 20,
    top: "50%",
    position: "absolute",
  },
  searchInput: {
    padding: 10,
    paddingLeft: 35,
  },
});

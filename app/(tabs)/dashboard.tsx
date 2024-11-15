import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import CustomButton from "@/components/customButton";
import moment from "moment";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputArea}>
        <Text style={styles.clockArea}>{moment().format("h:mm a")}</Text>
        <View style={styles.buttonArea}>
          <CustomButton
            title="Check In"
            onPress={() => {
              console.log("Hello");
            }}
            textStyles={styles.buttonStyles}
            containerStyles={styles.buttonStyles}
          ></CustomButton>
          <CustomButton
            title="Check out"
            onPress={() => {
              console.log("Hello");
            }}
            textStyles={styles.buttonStyles}
            containerStyles={styles.buttonStyles}
          ></CustomButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6700D6",
    justifyContent: "center",
    gap: 4,
  },
  inputArea: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  clockArea: {
    fontSize: 48,
    textAlign: "center",
    minHeight: 30,
    padding: 8,
    letterSpacing: 2,
    color: "yellow",
  },
  buttonArea: {
    flexDirection: "row",
    gap: 30,
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyles: {
    fontSize: 12,
    padding: 4,
    backgroundColor: "#E4E185",
    minWidth: "40%",
    borderRadius: 10,
  },
});

export default Dashboard;

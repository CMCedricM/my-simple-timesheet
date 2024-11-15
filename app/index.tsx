import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  Button,
} from "react-native";
import CustomButton from "@/components/customButton";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.textContainter}>
            <Text style={styles.textContainter}>My Simple Timesheet</Text>
            <Text style={styles.subTextContainer}>
              Simple time tracking and hour recording for the individual
            </Text>
          </View>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/working-hours.png")}
          ></Image>
          <View>
            <CustomButton
              title="My Dashboard"
              onPress={() => {
                router.push("/dashboard");
              }}
              textStyles={styles.buttonStyles}
              containerStyles={styles.buttonStyles}
            ></CustomButton>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6700D6",
    justifyContent: "space-between",
    gap: 4,
  },
  buttonStyles: {
    fontSize: 18,
    backgroundColor: "#E4E185",
    minWidth: "100%",
  },
  textContainter: {
    fontSize: 36,
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
    color: "yellow",
  },
  subTextContainer: {
    fontSize: 12,
    color: "yellow",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});

import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "@/components/customButton";
import GenericTable from "@/components/genericTable";
import moment from "moment";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        const { user_metadata } = user;
        setUser(`${user_metadata.firstName} ${user_metadata.lastName}`);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <SafeAreaView style={styles.inputArea}>
          <View style={styles.container}>
            <View style={styles.buttonArea}>
              <Text>{`Hello ${user}`}</Text>
              <TouchableOpacity
                onPress={async () => await supabase.auth.signOut()}
              >
                <Image
                  style={styles.logoutButtonStyle}
                  source={require("../../assets/images/logout.png")}
                ></Image>
              </TouchableOpacity>
            </View>
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
          </View>
          <View style={styles.tableArea}>
            <GenericTable></GenericTable>
          </View>
        </SafeAreaView>
      )}
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

    justifyContent: "center",
  },
  tableArea: {
    maxHeight: "50%",
    marginBottom: 8,
    padding: 4,
    backgroundColor: "#80DB8D",
    borderRadius: 10,
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
  logoutButtonStyle: {
    height: 15,
    width: 15,
  },
});

export default Dashboard;

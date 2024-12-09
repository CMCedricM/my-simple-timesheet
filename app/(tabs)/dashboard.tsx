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
import GenericTable, { TableItem } from "@/components/genericTable";
import moment from "moment";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [clockData, setClockData] = useState<TableItem[]>([]);

  useEffect(() => {
    const checkUserInformation = async () => {
      const userInformation = await supabase.auth.getUser();
      if (userInformation.data) {
        const { user } = userInformation.data;
        if (user) {
          const { user_metadata } = user;
          const userName = `${user_metadata.firstName} ${user_metadata.lastName}`;
          setUser(user);
          setUserName(userName);
        }
      }
    };

    checkUserInformation();
  }, []);

  const checkInUser = async () => {
    const newItem: TableItem = {
      id: 0,
      Name: userName,
      Action: "Clock-In",
      Time: new Date().toISOString(),
    };
    const { error: err } = await supabase.from("Timesheet").insert({
      clock_time: new Date().toISOString(),
      action: "Clock-in",
      user_id: user?.id,
    });
    if (err) {
      console.log(err);
      return;
    }
    setClockData([newItem, ...clockData]);
  };

  const checkOutUser = async () => {
    const newItem: TableItem = {
      id: clockData.length + 1,
      Name: userName,
      Action: "Clock-Out",
      Time: new Date().toISOString(),
    };
    setClockData([newItem, ...clockData]);
  };

  return (
    <View style={styles.container}>
      {user && (
        <SafeAreaView style={styles.inputArea}>
          <View style={styles.container}>
            <View style={styles.helloTextArea}>
              <Text style={styles.helloText}>{`Hello ${userName}`}</Text>
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
                onPress={async () => {
                  await checkInUser();
                }}
                textStyles={styles.buttonStyles}
                containerStyles={styles.buttonStyles}
              ></CustomButton>
              <CustomButton
                title="Check out"
                onPress={async () => {
                  await checkOutUser();
                }}
                textStyles={styles.buttonStyles}
                containerStyles={styles.buttonStyles}
              ></CustomButton>
            </View>
          </View>
          <View style={styles.tableArea}>
            <GenericTable dataItems={clockData}></GenericTable>
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
  helloTextArea: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  helloText: {
    fontSize: 24,
    color: "yellow",
  },
});

export default Dashboard;

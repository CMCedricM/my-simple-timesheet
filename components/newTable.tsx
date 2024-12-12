import { Tables } from "@/app/types/database.types";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import moment from "moment";

export interface TimeSheetTableType {
  dataItems: Tables<"Timesheet">[];
  userName?: string;
}

const TimeSheetTable = ({ dataItems, userName }: TimeSheetTableType) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.rowHeader}>Name</Text>
        <Text style={styles.rowHeader}>Status</Text>
        <Text style={styles.rowHeader}>Date</Text>
        <Text style={styles.rowHeader}>Time</Text>
      </View>
      <ScrollView>
        {dataItems.map((item, index) => {
          return (
            <View style={styles.row} key={index}>
              <Text>{userName}</Text>
              <Text>{item.status}</Text>
              <Text>{item.clock_time.split("T")[0]}</Text>
              <Text>{moment(item.clock_time).format("hh:mm A")}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 2,
    minWidth: "100%",
  },
  rowHeader: {
    fontWeight: "bold",
    alignContent: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    minWidth: "100%",
    gap: 4,
    justifyContent: "space-between",
    padding: 10,
  },
});

export default TimeSheetTable;

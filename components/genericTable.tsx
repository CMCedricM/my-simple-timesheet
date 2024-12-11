import { Tables } from "@/app/types/database.types";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

interface GenericTableType {
  dataItems: Tables<"Timesheet">[];
}

const GenericTable = ({ dataItems }: GenericTableType) => {
  console.log(dataItems);
  const renderItem = ({ item }: { item: Tables<"Timesheet"> }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.user_id}</Text>
      <Text style={styles.cell}>{item.action}</Text>
      <Text style={styles.cell}>{item.clock_time}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={dataItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.row}>
            <Text style={styles.headerCell}>Name</Text>
            <Text style={styles.headerCell}>Action</Text>
            <Text style={styles.headerCell}>Time</Text>
          </View>
        }
      ></FlatList>
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
  table: {
    margin: 15,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    minWidth: "100%",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
    textAlign: "left",
  },
  cell: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
  },
});

export default GenericTable;

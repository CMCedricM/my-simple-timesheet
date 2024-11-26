import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

const testData: TableItem[] = [
  {
    id: 1,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
  {
    id: 2,
    Name: "Abrazo",
    Action: "Checked In",
    Time: new Date().toISOString(),
  },
];

export interface TableItem {
  id: number;
  Name: string;
  Action: string;
  Time: string;
}

interface GenericTableType {
  dataItems: TableItem[];
}

const GenericTable = ({ dataItems }: GenericTableType) => {
  const renderItem = ({ item }: { item: TableItem }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.Name}</Text>
      <Text style={styles.cell}>{item.Action}</Text>
      <Text style={styles.cell}>{item.Time}</Text>
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

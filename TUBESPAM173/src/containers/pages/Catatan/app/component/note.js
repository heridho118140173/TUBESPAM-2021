import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    marginTop: 20,
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
    flexDirection: "row",
    backgroundColor: "#c4c4c4",
  },
  noteText: {
    paddingLeft: 20,
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e05759",
    padding: 10,
    top: 0,
    bottom: 0,
    right: 0,
  },
  noteDeleteText: {
    color: "white",
  },
});

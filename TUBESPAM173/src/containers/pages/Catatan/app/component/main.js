import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import Note from "./note";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteArray: [],
      noteText: "",
    };
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#008D88"} />
        <View style={styles.header}>
          <View style={styles.TLogo}>
            <Image
              style={styles.Logo}
              source={require('../../../../../../LogoSplash.png')}
            />
          </View>
          <Text style={styles.headerText}>Catatan</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Masukan data"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={this.addTask.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addTask() {
    if (this.state.noteText) {
      var date = new Date();
      this.state.noteArray.push({
        date:
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear(),
        note: this.state.noteText,
      });
      ToastAndroid.showWithGravity(
        "Data berhasil ditambahkan",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: this.state.noteText });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
    ToastAndroid.showWithGravity(
      "Data berhasil dihapus",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#008D88",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Logo: {
    width: 50,
    height: 50,
  },
  TLogo: {
    top: 7,
    left: 7,
    // buttom: 0,
    position: "absolute",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    padding: 20,
    fontWeight: "400",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    left: 50,
    right: 50,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#000",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#040404",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#008D88",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {

    color: "#ffffff",
    fontSize: 32,
  },
});

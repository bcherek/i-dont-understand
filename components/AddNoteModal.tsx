import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Modal, TextInput } from "react-native";

function AddNoteModal({modalVisible,setModalVisible,addNote,newNote,setNewNote}) {
  return <Modal
    visible={modalVisible}
    animationType="slide"
    transparent
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Add a New Note </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter note..."
          placeholderTextColor={"lightgrey"}
          value={newNote}
          onChangeText={setNewNote}
        ></TextInput>
        <View style={styles.modalBtns}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              addNote();
            }}
          >
            <Text style={styles.saveBtnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>;
}
export default AddNoteModal;


const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "80%",
    height: "20%",
  },
  modalTitle: {
    textAlign: "center",
  },
  modalBtns: {
    flexDirection: "row",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  saveButton: {
    backgroundColor: "blue",
  },
  myContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "space-evenly",
  } as ViewStyle,
  noteBtn: {
    padding: 10,
    margin: 4,
    backgroundColor: "lightgrey",
  } as ViewStyle,
  noteText: {
    fontSize: 18,
  },
  addNoteBtn: {
    backgroundColor: "#007bff",
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
  },
  addNoteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

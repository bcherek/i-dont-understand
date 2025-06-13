import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";
import { DBOutput } from "@/services/databaseService";
import noteService from "@/services/noteService";
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";


function NoteScreen() {
  const [notes, setNotes] = useState<DBOutput[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Use effect is a react-native method that
  //connects my component to some external system.
  //It takes in a setup function that connects to that system, in this case
  //fetchNotes.
  useEffect(() => {fetchNotes();}, []);

  const fetchNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes();

    if ('error' in response) {
      Alert.alert('Error', response.error);
      setError(error);
    }
    else {
      setNotes(response.data);
      setError(null);
    }
    setLoading(false);
  };

  const addNote = async ()  => {
    if (newNote.trim() === "") return; //prevents adding empty notes to DB

    const resp = await noteService.addNewNote(newNote);

    if ('error' in resp) {
      Alert.alert("skissue", "Error adding note to db");
    } else {
      setNotes([...notes,resp]);
    }
    setNewNote("");
    setModalVisible(false);
  };

  return (
    <View style={styles.myContainer}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"blue"}/>
      ): (
        <>
          {error ? (<Text>Error</Text>) : (<NoteList notes={notes}/>)}
        </>
      )}

      <TouchableOpacity
        style={styles.addNoteBtn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addNoteText}>+ Add Note</Text>
      </TouchableOpacity>
      <AddNoteModal
      addNote={addNote}
      newNote={newNote}
      setNewNote={setNewNote}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      >

      </AddNoteModal>
    </View>
  );
}

export default NoteScreen;

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

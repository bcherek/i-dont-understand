import { StyleSheet, Text, View, ViewStyle } from "react-native";

const NoteItem = function(note : NoteItemInput) {
  return(
  <View style={styles.noteBtn}>
    <Text style={styles.noteText}> {note.noteText} </Text>
    
  </View>);
}

export default NoteItem;


const styles = StyleSheet.create({
  noteBtn: {
    padding: 10,
    margin: 4,
    backgroundColor: "lightgrey",
  } as ViewStyle,
  noteText: {
    fontSize: 18,
  },
});

export interface NoteItemInput {
  "noteText" : string,
  "dateCreated" : string, 
  "$id" : string,
}
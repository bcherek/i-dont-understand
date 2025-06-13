import { FlatList } from "react-native"; 
import NoteItem from "./NoteItem";
import {Models} from "react-native-appwrite";
import { DBOutput } from "@/services/databaseService";
import { NoteItemInput } from "./NoteItem";

function NoteList({notes}: NoteListProps) {

  function makeNoteItemInput(note: DBOutput) {
    const out: NoteItemInput = {
      noteText : note.text,
      dateCreated : note.$createdAt,
      $id : note.$id
    }
    return out;
  };

    return (<FlatList
        data={notes}
        //This needs to be $id because $ means we're pulling from DB
        keyExtractor={(item: DBOutput) => item.$id}
        renderItem={({ item }) => (
        <NoteItem {...makeNoteItemInput(item)}></NoteItem>
        )}
      />);

    }
type NoteListProps = {
  notes: DBOutput[];
};
export default NoteList;
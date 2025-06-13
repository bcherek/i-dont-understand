import databaseService from "./databaseService";
import { DBInput } from "./databaseService";
import {ID} from "react-native-appwrite";

//Appwrite databse and collection id
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID as string;
const colID = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID as string;

const noteService = {
    //Get notes
    async getNotes() {
        const resp = await databaseService.gimmeDocuments(dbId,colID);
        if ('error' in resp) {
            //This shouldn't happen? gimmeDocuments never returns an error
            return {error: resp.error};
        }
        return {data : resp};
    },
    async addNewNote(data: string) {
        if (!data) {
            return {error: "note text empty"};
        }
        const myNote: DBInput = {
            text: data,
            "create-time": new Date(),
        }
        console.log(ID.unique());

        const resp = await databaseService.makeDocument(dbId,colID,myNote,ID.unique());
        return resp;
    }
}
export default noteService;
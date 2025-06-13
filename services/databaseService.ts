import { AppwriteException, Models } from "react-native-appwrite";
import { database } from "./appwrite";
import { UnknownOutputParams } from "expo-router";


const databaseService = {
    //This is where we do CRUD
    
    //Read
    async gimmeDocuments(dbId: string,colId: string): Promise<DBOutput[] | { error: string }> {
        try {
            //interfacing with Appwrite API
            const response = await database.listDocuments(dbId,colId);
            return response.documents as DBOutput[] || [] as DBOutput[]
        }
        //Errors have messages
        catch (error:unknown) {
            
            console.error("Error fetching documents.");
            if (error instanceof Error) {
                console.error("Error message:", error);
                return {error: error.message};
            }
            else {
                console.error("No additional error message");
                return {error: "unknown"};
            }
        }
    },
        //Create
    async makeDocument(dbId:string, colId:string, data:DBInput, id:string=""): Promise<DBOutput | {error: string}> {
            try {
                return await database.createDocument(dbId,colId,id,data) as DBOutput;
            }
            catch (error:unknown) {
            
            console.error("Error creating document.");
            if (error instanceof Error) {
                console.error("Error message:", error);
                return {error: error.message};
            }
            else {
                console.error("No additional error message");
                return {error: "unknown"};
            }
        }
    },
};


// by extending the interface, we get all of the fields from both
export interface DBOutput extends Models.Document {
    //These names conform to Appwrite's custom structure (what's written in the collection)
    "text": string,
    "create-time": Date,
}
export interface DBInput {
    "text": string,
    "create-time": Date,
}

export default databaseService;
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";

function NoteLayout(){
      return <Stack
    screenOptions = {myScreenOpts}>
    </Stack>;
};

export default NoteLayout;

const myScreenOpts: NativeStackNavigationOptions = {
  headerShown : false,
  contentStyle : {
    backgroundColor : "white",
  }
};  
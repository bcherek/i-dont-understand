import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
//"Stack" describes how the pages interact
//with one another. Pages are added onto the stack and
//removed one by one. That's what the arrow in
//the top left does.

//Alternatively, you can use "Slot", which does not
//have the back arrow.

function RootLayout() {
  return (
    <Stack screenOptions={myScreenOpts}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
    </Stack>
  );
}
const myScreenOpts: NativeStackNavigationOptions = {
  //top banner
  headerStyle: {
    backgroundColor: "purple",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign : "center",
  //main page
  contentStyle: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "white",
    // alignItems: 'center',
  },
};

export default RootLayout;

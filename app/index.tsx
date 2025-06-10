import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

// can use some lambda notation here but no need
function Index(): React.ReactElement {
  const router = useRouter();

  return (
    //View is like a div
    <View style={styles.myCont}>
      <Image source={require('../assets/images/post-it.png')} style={styles.myImg}/>
      <Text style={styles.myTitle}>Welcome to Notes App</Text>
      <Text style={styles.mySubtitle}>press da button </Text>
    
        <TouchableOpacity
        style={styles.myButton}
        onPress={() => router.push('./notes')}
        >
          <Text style={styles.myButtonText}>Get started</Text>
        </TouchableOpacity>

    
    </View>
  );
}
export default Index;

const styles = StyleSheet.create({
  myCont: {
    flex: 1,
    justifyContent: `center`,
    alignItems: "center",
    // padding: 20
  } as ViewStyle, //type assertion
  myImg : {
    width : 100,
    height : 100,
    // marginBottom : 20,
    // borderRadius : 10
  },
  myTitle : {
    fontSize: 28,
    color : "red"
  },
  mySubtitle : {
    fontSize: 16,
    color : "blue"
  },
  myButton: {
    backgroundColor: '#007bff',
    // paddingVertical: 12,
    // paddingHorizontal: 25,
    // borderRadius: 8,
    alignItems: 'center'
  },
  myButtonText: {
    color: '#fff',
    // fontSize: 18,
    fontWeight: 'bold',
  }
});

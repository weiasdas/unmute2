import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { NavBottom } from './Components/BottomNavigation'
import { EventCarousel } from './Components/EventCarousel';
import { HearingLoss } from './Components/Hearing_Loss';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text_Speech } from './Pages/Text_Speech'
import { Events_Screen } from './Pages/Events_Page'
import { Loss_Screen } from './Pages/Loss_Page'
import { Speech_Text } from './Pages/Speech_Text'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/icon/background.png')} style={{ flex: 1, justifyContent: "center", width: "100%" }}> */}
        <View style={{ alignItems:"center",marginTop:20}}>
          <Text style={{ marginLeft: "5%", marginBottom: 20, fontSize: "20px", color: "rgba(88, 79, 79, 1)", fontWeight: "700" }}>Latest Event</Text>
        </View>
        <EventCarousel />
        <View style={styles.card_container}>
          <Text style={{ textAlign: "center", marginTop: 10, color: "#828282", fontSize: "18px" }}>Select Our Mode</Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 1 }}>
              <View style={{ width: 100, height: 100, marginLeft: 10, marginTop: 10, backgroundColor: "#D7E5F4", borderTopLeftRadius: "20%", borderBottomRightRadius: "20%", borderTopRightRadius: "20%", borderBottomLeftRadius: "20%" }}>
                <Image source={require('./assets/icon/translator.png')} style={{ width: 80, height: 80, marginTop: 0, marginLeft: 10, marginTop: 10, resizeMode: 'contain' }}></Image>
                <View style={{ marginTop: 30, width: 100, height: 30, backgroundColor: "#D7E5F4", borderRadius: "20%" }}>
                  <Text style={{ marginTop: 5, color: "black", fontSize: 14, textAlign: "center" }} onPress={() => navigation.navigate('Text')}>Translator</Text>
                </View>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ width: 100, height: 100, marginLeft: 10, marginTop: 10, backgroundColor: "#D7E5F4", borderTopLeftRadius: "20%", borderBottomRightRadius: "20%", borderTopRightRadius: "20%", borderBottomLeftRadius: "20%" }}>
                <Image source={require('./assets/icon/final_2.png')} style={{ width: 80, height: 80, marginTop: 0, marginLeft: 10, marginTop: 10, resizeMode: 'contain' }}></Image>
                <View style={{ marginTop: 30, width: 100, height: 30, backgroundColor: "#D7E5F4", borderRadius: "20%" }}>
                  <Text style={{ marginTop: 5, color: "black", fontSize: 14, textAlign: "center" }} onPress={() => navigation.navigate('Speech_Text')}>Hearing Test</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ width: 100, height: 100, marginLeft: 10, marginTop: 10, backgroundColor: "#D7E5F4", borderTopLeftRadius: "20%", borderBottomRightRadius: "20%", borderTopRightRadius: "20%", borderBottomLeftRadius: "20%" }}>
                <Image source={require('./assets/icon/WechatIMG330.png')} style={{ width: 80, height: 80, marginTop: 0, marginLeft: 10, marginTop: 10, resizeMode: 'contain' }}></Image>
                <View style={{ marginTop: 30, width: 100, height: 30, backgroundColor: "#D7E5F4", borderRadius: "20%" }}>
                  <Text style={{ marginTop: 5, color: "black", fontSize: 14, textAlign: "center" }} >Auslan Tutorial</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ marginTop: "5%", marginLeft: "5%", fontSize: "20px", color: "rgba(88, 79, 79, 1)", fontWeight: "700" }}>About Hearing Loss Group</Text>
        <HearingLoss />
        <NavBottom />
      {/* </ImageBackground> */}

    </View>
  );
}

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Text" component={Text_Speech} />
        <Stack.Screen name="Event_Screen" component={Events_Screen} />
        <Stack.Screen name="Loss_Screen" component={Loss_Screen} />
        <Stack.Screen name="Speech_Text" component={Speech_Text} />
      </Stack.Navigator >
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D7E5F4'
  },

  H1: {
    fontFamily: "Times New Roman",
    fontSize: "39px",
    color: "#854E34",
    fontWeight: "700",
    marginLeft: "5%",
    marginTop: "13%"
  },

  card_container: {
    marginTop: 0,
    width: 360,
    height: 200,
    marginLeft: 20,
    backgroundColor: "white",
    borderTopLeftRadius: "40%",
    borderTopRightRadius: "40%",
    borderBottomLeftRadius: "40%",
    borderBottomRightRadius: "40%"

  }
})

export default App;



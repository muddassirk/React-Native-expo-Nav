// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Hello world</Text> */}
//       {/* <StatusBar style="auto" /> */}
//       <View style={styles.black}>
//       <Text>Hello White</Text>
//       </View>
//       <View style={styles.red}>
//       <Text>Hello Red</Text>
//       <Text>Hello Red</Text>

//       </View>
//       <View style={styles.blue}>
//       <Text>Hello Blue</Text>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   black:{
//     color: 'white',
//     flex: 1,
//     width: "100%",
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'black'
//   },
//   red:{
//     color: 'white',
//     flex: 1,
//     width: "100%",
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   blue:{
//     color: 'white',
//     flex: 1,
//     width: "100%",
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });


import React from 'react';
import {  Footer, FooterTab, Button, Icon } from 'native-base';
// import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    

  

    return (
        // <Footer style={styles.container}>
        <Footer style={{marginTop:50, backgroundColor:'white'}}>
            <FooterTab style={{color:'white',backgroundColor:"black",}}>
                <Button >
                    <Icon   style={{color:'white'}} name="home" />
                </Button>
                <Button >
                    <Icon  style={{color:'white'}} name="search" />
                </Button>
                <Button >
                    <Icon  style={{color:'white'}} name="add"  />
                </Button>
                <Button >
                    <Icon style={{color:'white'}} name="camera" />
                </Button>
                <Button>
                    <Icon style={{color:'white'}} name="person" />
                </Button>
            </FooterTab>
        </Footer>



    );

}
// const styles = new StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
  
// });
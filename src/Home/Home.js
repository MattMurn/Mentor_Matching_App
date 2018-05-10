import React from "react";
import { StatusBar, AsyncStorage,StyleSheet,TextInput, Alert } from "react-native";
import Expo from "expo";
import {
  AppRegistry,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Thumbnail,
  View,
  Image,
  Form,
  Item,
  Label,
  Input,
 
} from "native-base";

export default class Home extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('588219858226492', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const endpoint = 'https://graph.facebook.com/me?fields=id,email,name,picture&access_token='
      const response = await fetch(endpoint.concat(token)).then(response => response.json());
      console.log(response)
      console.log("hello")
    }
  }

  async getKey(){
    try {
      const value = await AsyncStorage.getItem('@mySuperStore:key');
      this.setState({myKey: value});
    }
    catch (error) {
      console.log("Error retrieving data " + error)
    }
  }

  render() {
    return (
//       <View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to Demo AsyncStorage!
//       </Text>

//       <TextInput
//         style={styles.formInput}
//         placeholder="Enter key you want to save!"
//         value={this.state.myKey}
//         onChangeText={(value) => this.saveKey(value)}
//         />

//       <Button
//         style={styles.formButton}
//         onPress={this.getKey.bind(this)}
//         title="Get Key"
//         color="#2196f3"
//         accessibilityLabel="Get Key"
//       />

//       <Button
//         style={styles.formButton}
//         onPress={this.resetKey.bind(this)}
//         title="Reset"
//         color="#f44336"
//         accessibilityLabel="Reset"
//       />

//       <Text style={styles.instructions}>
//         Stored key is = {this.state.myKey}
//       </Text>


//     </View>
//   );
// }
// }
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            {/* <Item floatingLabel>
              <Label>Username</Label>
              <Input 
              value={this.state.myKey}
        onChangeText={(value) => this.saveKey(value)} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              />
            </Item> */}
          </Form>
         <Button
            full
            rounded
            primary
            style={{ marginTop: 200 }}
            onPress={this.logIn}     
          >
            <Text>Login with Facebook</Text>
          </Button>
          {/* <Button
            full
            rounded
            dark
            style={{ marginTop: 30 }}
            //onPress={(value) => this.saveKey(value)}
           
           
          >
            <Text>Log In With Facebook</Text>
            </Button>
          

        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
  },
  formButton: {
    borderWidth: 1,
    borderColor: "#555555",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});
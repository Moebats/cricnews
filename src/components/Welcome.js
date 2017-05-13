import React, { Component } from 'react';
import { Icon, Container, Button, Content, Form, Item, Input, Label} from 'native-base';
import Home from './Home';
import { StackNavigator } from 'react-navigation';


class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome to CricNews',
  };

  handleClick = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <Text> Welcome to Cric News </Text>
          <Button success onPress={this.handleClick} />
      </Container>
    );
  }
}

export default Welcome;

import React from 'react';
import { ScrollView, StyleSheet    } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import ZodiacCard from '../components/zodiacCard';
import RenderAllZodiac from '../components/RenderAllZodiac';
import SelectZodiac from '../components/SelectZodiac';
import Images from '../components/Images';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

// or any pure javascript modules available in npm
import {  List, ListItem } from 'react-native-elements'; // Version can be specified in package.json
export default class DailyScreen extends React.Component {
  static navigationOptions = {
    title: 'Daily Horoscope  V0.02',
  };

  render() {
        console.log(this.props.navigation)
    const image = Images.zodiac.Scorpio.image
    const { navigate } = this.props.navigation;

    return (



       <Container>

            <SelectZodiac navigation={this.props.navigation} sign='scorpio' />  
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import * as React from 'react';
import {   View, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import images from './Images';
import {  List, ListItem } from 'react-native-elements'; // Version can be specified in package.json
import RenderZodiacDetailes from './RenderZodiacDetailes';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class SelectZodiac extends React.Component {

  render(props) {

    console.log("props " + this.props.navigation)
    const { navigate } = this.props.navigation;

    return (
      
        
          <View style={styles.container}>
           {
        Object.keys(packImages.zodiac).map(function(key, index){ 

          var image = packImages.zodiac[key].image;
          var date = packImages.zodiac[key].date;
          return (   

            <View>
          {  /*                 //  <Button  title={key}  onPress={() => this.props.navigation.navigate('Zodiac', { navigation: this.props.navigation, sign: key })} /> */}
 
        <TouchableOpacity 
        
      
        onPress={() =>this.props.navigation.navigate('Zodiac', { navigation: this.props.navigation, sign: key  } )}>



    <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Scorpio</Text>
                  <Text note>12 AUG - 12 SEPT</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={image} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>



          <Card title={key}>  
        
        <Text style={styles.sign}> {key} </Text>
        <Text style={styles.date}> {date} </Text>
          <Image style={styles.logo} source= {image} />   
          </Card>   
          </TouchableOpacity>
       </View>

          )
        },this)}
   
            
    
  
                  
       </View>
    );
  }
}
 
 const packImages = images;
 
 const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

  },
   date: {
    flex:1,
  },
    sign: {
    flex:1,
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 64,
    width: 64,
  }
});

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
      

 
 



        
           <Container>
         <Content>
          <Card>
           {
        Object.keys(packImages.zodiac).map(function(key, index){ 

          var image = packImages.zodiac[key].image;
          var date = packImages.zodiac[key].date;
          return (   

        
 
        <TouchableOpacity 
        
      
        onPress={() =>this.props.navigation.navigate('Zodiac', { navigation: this.props.navigation, sign: key  } )}>


        
 
            <CardItem>
              <Left>
                <Thumbnail source={image} />

                <Body>
                  <Text>{key}</Text>
                  <Text note> {date}</Text>
                </Body>
              </Left>
            </CardItem>

 
 


   
          </TouchableOpacity>
  

          )
        },this)}
   
            
    
            </Card>
        </Content>
      </Container>
                  
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

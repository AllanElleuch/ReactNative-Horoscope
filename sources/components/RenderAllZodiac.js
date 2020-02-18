import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import images from './Images';
import { Card , List, ListItem } from 'react-native-elements'; // Version can be specified in package.json
import RenderZodiacDetailes from './RenderZodiacDetailes';

export default class RenderAllZodiac extends React.Component {

  render(props) {
    return (
      
        
          <View style={styles.container}>
            
          {
        Object.keys(packImages.zodiac).map(function(key, index){ 
          var image = packImages.zodiac[key];
          return (   


          <Card title={key}>  
         <Text style={styles.paragraph}>
          Describe my card  
          
        </Text>
          <RenderZodiacDetailes/>  

          <Image style={styles.logo} source= {image} />   
          </Card>        
          )
        })}
   
            
    
  
                  
       </View>
    );
  }
}
 
 const packImages = images;
 
 const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 64,
    width: 64,
  }
});

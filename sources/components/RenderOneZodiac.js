import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import images from './Images';
import { Card , List, ListItem } from 'react-native-elements'; // Version can be specified in package.json
export default class RenderZodiacDetailes extends React.Component {

    constructor(props){
        super(props);
         this.state = {
          json: {},
          loading: 'false'
        }
    }
    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({
          json: json,
          loading: 'true'
        }); });
    }
    
  render(props) {
    return (
      
        
          <View  >
            
        
        
        <Text style={styles.paragraph}>Current Date: {this.state.json.current_date}  </Text>

        <Text style={styles.paragraph}> Current Date: {this.state.json.current_date}   </Text>        
         
         <Text style={styles.paragraph}> Compatibility: {this.state.json.compatibility}</Text>
         
        <Text style={styles.paragraph}> Lucky Number: {this.state.json.lucky_number}   </Text>
         
         
         <Text style={styles.paragraph}> Lucky Time: {this.state.json.lucky_time} </Text> 
         
        <Text style={styles.paragraph}> Color: {this.state.json.color}    </Text> 
         
         <Text style={styles.paragraph}> Date Range: {this.state.json.date_range}  </Text> 
         
         <Text style={styles.paragraph}>  Mood: {this.state.json.mood}  </Text>

           

        <Text style={styles.paragraph}>  Description: {this.state.json.description}   </Text>
          
   
            
    
  
                  
       </View>
    );
  }
}
RenderZodiacDetailes.defaultProps = {
  state: {
          data: {},
          loading: 'true'},
};

var names = ['Jake', 'Jon'];
const names2 = {
    zodiac: {
        scorpio: require('../assets/001-scorpio.png'),
    } 
};
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

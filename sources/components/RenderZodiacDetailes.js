import * as React from 'react';
import {   View, StyleSheet, Image } from 'react-native'; //Text
import images from './Images';
import {  List, ListItem  } from 'react-native-elements'; // Version can be specified in package.json //Card ,
import { Col, Row, Grid } from "react-native-easy-grid";

import { Container, Header, Content, Card, CardItem, Thumbnail, Text,Title, Button, Icon, Left, Body, Right,Input  } from 'native-base';


export default class RenderZodiacDetailes extends React.Component {
   static navigationOptions = ({ navigation }) => ({

    title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.sign) === 'undefined' ? 'find': navigation.state.params.sign,

     });

    constructor(props){
        super(props);
         this.state = {
          json: {},
          loading: 'false',
           sign : props.sign   ? props.sign    :  props.navigation.getParam('sign', ''),
        }

    }
    componentDidMount () {
        {console.log("sign : " + this.state.sign)}
        {console.log("u  : " + 'https://aztro.sameerkumar.website/?sign='+ this.state.sign +'&day=today')}

        const URL = 'https://aztro.sameerkumar.website/?sign='+ this.state.sign +'&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({
          json: json,
          loading: 'true',
          sign : this.state.sign
        });
        

        
         });

 
    }
    
  render(props) {
     const image = images.zodiac.Scorpio.image
     var sign  = jsUcfirst(this.state.sign)
     let header;
    if (typeof(this.props.navigation)==='undefined') {
    console.log("Render Header please")
    header = <Header>

           
            <Body>
              <Title>{sign}</Title>
            </Body>
            <Right />
          </Header>;
    }
    else {
    console.log("not Render Header please")
    }
    return (
      
        
     <Container>
         
         {header}
         <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={image} />
                <Body>
                  <Text >{sign}  </Text>
                  <Text > {this.state.json.mood} mood  </Text>
                 </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              
                  
                  <Text>
                  {this.state.json.description}
                  </Text>

 

                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection:'column',paddingTop:10  }} >    
                  
                          <View style={{ flex: 1, flexWrap: 'wrap', flexDirection:'row'  }} >    
                           <Text style={styles.leftColumn}>  Compatibility :    </Text> 
                           <Text style={styles.extra} > {this.state.json.compatibility}  </Text>
                          </View>

                          <View style={{ flex: 1, flexWrap: 'wrap', flexDirection:'row'  }} >    
                           <Text style={styles.leftColumn}>  Lucky Number :    </Text> 
                           <Text style={styles.extra} > {this.state.json.lucky_number}  </Text>
                          </View>

                          <View style={{ flex: 1, flexWrap: 'wrap', flexDirection:'row'  }} >    
                           <Text style={styles.leftColumn}>  Lucky Time :    </Text> 
                           <Text style={styles.extra} > {this.state.json.lucky_time}  </Text>
                          </View>

                          <View style={{ flex: 1, flexWrap: 'wrap', flexDirection:'row'  }} >    
                           <Text style={styles.leftColumn}>  Color :    </Text> 
                           <Text style={styles.extra} > {this.state.json.color}  </Text>
                          </View>
 
               
                  </View>
              </Body>
            </CardItem>
            
      
          </Card>
        </Content>
      </Container>





        

     );
  }
}


function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 
 const packImages = images;
 
 const styles = StyleSheet.create({

  paragraph: {
    margin: 30,
    marginTop: 5,
    fontSize: 14,
    color: '#34495e',
    textAlign: 'left',
  },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center',

  },   
   subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center',

  },
  extra: {
    fontSize: 14,
    color: '#34495e',
    textAlign: 'left'
 
  },
   leftColumn: {
    fontSize: 14,
    width: 120,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign:'right'

  },
      navBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBarTitle: {
        textAlign: 'center',
    },
    icon: {
        height: 60,
        resizeMode: 'contain',
    },
  
});

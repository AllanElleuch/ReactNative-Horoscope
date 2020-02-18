import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class zodiacCard extends React.Component {
  render(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Local files and assets can be imported by dragging and dropping them into the editor "../assets/005-libra.png{this.props.name}"
        </Text>
        <Image style={styles.logo} source= {this.props.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    height: 128,
    width: 128,
  }
});

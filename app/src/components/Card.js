import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Card = props => {
  const {id, name, price, direction, stars, details} = props.values;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../img/fideos.jpg')} style={styles.image} />
        <View style={styles.cardBody}>
          <Text>{name}</Text>
          <Text>{direction}</Text>
          <Text>{price}</Text>
          <Text>{stars}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Card;

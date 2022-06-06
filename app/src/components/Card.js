import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from './Details';
import ImageStar from './ImageStar';
import LikeButton from './LikeButton';
import Location from './Location';
const Card = ({
  id,
  title,
  price,
  direction,
  stars,
  environments,
  bath,
  meters,
}) => {
  return (
    <View style={styles.card}>
      <ImageStar style={{flex: 1}} stars={stars} />
      <View style={(styles.cardBody, {flex: 2})}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Location ubication={direction} width={20} height={20} />
        <Details environments={environments} bath={bath} meters={meters} />
        <Text style={styles.price}>{price}</Text>
        <LikeButton></LikeButton>
      </View>
    </View>
  );
};
///Ionicons  bed-outline -
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    backgroundColor: '#F5FDFF',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  cardBody: {
    backgroundColor: 'pink',
    width: 140,
  },
  cardTitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: 'black',
  },
});

export default Card;

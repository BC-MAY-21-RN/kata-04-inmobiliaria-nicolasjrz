import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Star from '../icons/star.svg';
const ImageStar = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/474x/b4/ee/e2/b4eee26494fae2af4e37dbad9ec2082c--architecture-visualization-marina.jpg',
        }}
        style={styles.image}
      />
      <View color="#fcba03" style={styles.icon}>
        <Star width={20} height={20} />
        <Text style={styles.text}>{props.stars}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  icon: {
    flexDirection: 'row',
    backgroundColor: '#f2f0e9',
    borderRadius: 25,
    fontSize: 25,
    padding: 5,
    alignSelf: 'center',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  text: {
    color: 'black',
  },
});

export default ImageStar;

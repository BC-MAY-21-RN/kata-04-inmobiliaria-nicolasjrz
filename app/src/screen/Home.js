import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Inmuebles from '../data/data.json';
import ListCard from '../components/ListCard';
const Home = () => {
  return (
    <View style={styles.container}>
      <ListCard data={Inmuebles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;

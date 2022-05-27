import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
const ListCard = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        renderItem={({item, index}) => <Card values={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListCard;

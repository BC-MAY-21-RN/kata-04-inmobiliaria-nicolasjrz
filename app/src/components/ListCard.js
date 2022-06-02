import React from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import Card from './Card';
const ListCard = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        renderItem={({item, index}) => <Card {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: Dimensions.get('window').width,
    alignSelf: 'center',
  },
});

export default ListCard;

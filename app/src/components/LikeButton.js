import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Like from '../icons/like.svg';

const LikeButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeButton}>
        <Like
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
  },
  likeButton: {
    padding: 5,
    width: 45,
    height: 40,
    backgroundColor: '#05B475',
    borderRadius: 150,
  },
});

export default LikeButton;

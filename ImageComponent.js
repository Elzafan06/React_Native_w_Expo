import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageComponent = ({ source }) => {
  return (
    <Image
      source={source}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ImageComponent;

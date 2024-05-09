import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const OpeningScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/JOBLY.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set background color to white
  },
  image: {
    width: 500, // Set image width to 500px
    height: 500, // Set image height to 500px
  },
});

export default OpeningScreen;

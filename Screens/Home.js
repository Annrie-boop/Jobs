import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

const Home = ({ navigation }) => {
    console.log(navigation)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerIconContainerLeft}>
        <Image source={require('../assets/download.png')} style={styles.drawerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerIconContainerRight}>
        <Image source={require('../assets/icon.jpeg')} style={styles.drawerIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIconContainerLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  drawerIconContainerRight: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  drawerIcon: {
    width: 30,
    height: 30,
  },
});

export default Home;

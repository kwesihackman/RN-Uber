import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw` text-red-500 p-10`}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

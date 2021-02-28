import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CallApiVanillaJs from './CallApiVanillaJs';

const App = () => {
  return (
    <View>
      <ScrollView>
        <CallApiVanillaJs />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

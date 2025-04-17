import {StyleSheet, View} from 'react-native';
import React from 'react';
import BreakingNews from './BreakingNews';
import Recommendation from './Recommendation';

const HomeScreenContent = () => {
  return (
    <View>
      <BreakingNews />
      <Recommendation />
    </View>
  );
};

export default HomeScreenContent;

const styles = StyleSheet.create({});

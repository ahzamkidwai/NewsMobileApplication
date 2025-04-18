import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import HomeScreenContent from '../components/HomeScreenContent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <HeaderBar />
        <HomeScreenContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

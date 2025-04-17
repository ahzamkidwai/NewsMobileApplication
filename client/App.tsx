import {ScrollView} from 'react-native';
import HeaderBar from './src/components/HeaderBar';
import HomeScreenContent from './src/components/HomeScreenContent';

const App = () => {
  return (
    <ScrollView>
      <HeaderBar />
      <HomeScreenContent />
    </ScrollView>
  );
};

export default App;

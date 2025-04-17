import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import newsIcon from '../public/images/news.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={{backgroundColor: '#ECECEC', borderRadius: 25, padding: 6}}>
        <Entypo name="menu" color={'black'} size={32} />
      </Pressable>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Image source={newsIcon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>News.Co</Text>
          {/* <Text style={styles.subtitle}>News from all around the world</Text> */}
        </View>
      </View>
      <TouchableOpacity
        style={{backgroundColor: '#ECECEC', borderRadius: 25, padding: 6}}>
        <Ionicons name="search" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  textContainer: {flexDirection: 'column'},
  title: {fontSize: 24, fontWeight: '700'},
  subtitle: {color: '#B7B7B7', fontWeight: '500'},
  icon: {width: 36, height: 36, resizeMode: 'contain'},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 10,
    marginVertical: '2%',
    paddingVertical: 8,
  },
});

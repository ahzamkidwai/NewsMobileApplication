import {StyleSheet, Image, View, Text} from 'react-native';
import newsIcon from '../public/images/news.png';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <Image source={newsIcon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>News.Co</Text>
        <Text style={styles.subtitle}>News from all around the world</Text>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  textContainer: {flexDirection: 'column'},
  title: {fontSize: 24, fontWeight: '700'},
  subtitle: {color: '#B7B7B7', fontWeight: '500'},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginVertical: '2%',
  },
  icon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
});

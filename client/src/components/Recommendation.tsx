import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Heading} from '@/components/ui/heading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {articlesData} from '../utils/dummyData';
import {Card} from '@/components/ui/card';

const Recommendation = () => {
  const [articles, setArticles] = useState([]);
  function formatPublishedDate(publishedAt) {
    const date = new Date(publishedAt);
    return date.toLocaleDateString();
  }
  useEffect(() => {
    let tempData = articlesData
      .map(item => item)
      .filter(item => item.urlToImage !== null);
    setArticles(tempData);
    console.log('TEMP DATA : ', articles);
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <Card size="md" variant="filled" className="m-3" style={styles.cardRow}>
        {item.urlToImage && (
          <Image source={{uri: item.urlToImage}} style={styles.image} />
        )}
        <View style={styles.contentColumn}>
          <View style={styles.content}>
            <Text style={styles.source}>Author: {item.author}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.source}>Source: {item.source.name}</Text>
            <Text style={styles.source}>
              Published on: {formatPublishedDate(item.publishedAt)}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.headerRow}>
        <Heading size="xl" style={styles.heading}>
          Breaking News
        </Heading>
        <View style={styles.viewAllRow}>
          <AntDesign name="downcircleo" color={'#6A9AB0'} />
          <Heading
            size="xl"
            style={[styles.heading, {color: '#6A9AB0', fontWeight: '500'}]}>
            View All
          </Heading>
        </View>
      </View>

      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  heading: {marginHorizontal: 10},
  viewAllRow: {flexDirection: 'row', alignItems: 'center'},
  list: {paddingHorizontal: 10},
  image: {width: 140, height: 140, resizeMode: 'cover'},
  content: {padding: 10},
  source: {fontSize: 11, color: '#666'},
  contentColumn: {flexDirection: 'column', width: '64%'},
  cardRow: {flexDirection: 'row'},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    overflow: 'hidden',
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
});

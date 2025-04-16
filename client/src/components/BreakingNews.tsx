import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import {Heading} from '@/components/ui/heading';
import {articlesData} from '../utils/dummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_SPACING = 7;
const INITIAL_COUNT = 4;
const LOAD_COUNT = 4;
const MAX_ARTICLES = 8;

const BreakingNews = () => {
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const filtered = articlesData
      .filter(article => !!article.urlToImage)
      .slice(0, MAX_ARTICLES);
    setAllArticles(filtered);
    setVisibleArticles(filtered.slice(0, INITIAL_COUNT));
  }, []);

  const loadMoreArticles = useCallback(() => {
    if (loadingMore || visibleArticles.length >= allArticles.length) return;
    setLoadingMore(true);

    setTimeout(() => {
      setVisibleArticles(prev => [
        ...prev,
        ...allArticles.slice(prev.length, prev.length + LOAD_COUNT),
      ]);
      setLoadingMore(false);
    }, 2000);
  }, [loadingMore, visibleArticles.length, allArticles]);

  //   const renderItem: ListRenderItem<any> = useCallback(
  //     ({item}) => (
  //       <View style={styles.card}>
  //         <Image source={{uri: item.urlToImage}} style={styles.image} />
  //         <Text numberOfLines={2} style={styles.title}>
  //           {item.title}
  //         </Text>
  //       </View>
  //     ),
  //     [],
  //   );

  const renderItem: ListRenderItem<any> = useCallback(
    ({item}) => (
      <View style={styles.card}>
        <Image source={{uri: item.urlToImage}} style={styles.image} />
        <View style={styles.overlay}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
        </View>
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const getItemLayout = useCallback(
    (_, index) => ({
      length: CARD_WIDTH + CARD_SPACING,
      offset: (CARD_WIDTH + CARD_SPACING) * index,
      index,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading size="xl" style={styles.heading}>
          Breaking News
        </Heading>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="downcircleo" color={'#6A9AB0'} />
          <Heading
            size="xl"
            style={[styles.heading, {color: '#6A9AB0', fontWeight: '500'}]}>
            View All
          </Heading>
        </View>
      </View>
      <FlatList
        data={visibleArticles}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        onEndReached={loadMoreArticles}
        onEndReachedThreshold={0.5}
        getItemLayout={getItemLayout}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        ListFooterComponent={
          loadingMore && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#999" />
            </View>
          )
        }
      />
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: {paddingVertical: 10},
  heading: {marginHorizontal: 10},
  listContent: {
    paddingHorizontal: 10,
    gap: CARD_SPACING,
  },
  //   card: {
  //     width: CARD_WIDTH,
  //     marginRight: CARD_SPACING,
  //     backgroundColor: '#fff',
  //     borderRadius: 8,
  //     overflow: 'hidden',
  //   },
  //   image: {
  //     width: '100%',
  //     height: 200,
  //     resizeMode: 'cover',
  //   },
  //   title: {
  //     padding: 8,
  //     fontSize: 14,
  //     fontWeight: '600',
  //     color: '#333',
  //   },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_SPACING,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  loader: {
    height: 200,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

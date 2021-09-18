import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ScreensOption} from '../../common';
import {RootState} from '../../store/store';
import {getImages} from '../../store/actions/action';
import styles from './styles';

const Home: React.FC = () => {
  const {images} = useSelector((state: RootState) => state.imageReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getPic = async () => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
      );
      const json = await response.json();
      dispatch(getImages(json));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPic();
  }, []);

  const renderItem = ({item: {urls, alt_description, user, id, color}}) => {
    return (
      <TouchableOpacity
        style={styles.imageItem}
        activeOpacity={0.6}
        onPress={() => navigation.navigate(ScreensOption.Image, {id, color})}>
        <ImageBackground style={styles.image} source={{uri: urls.regular}}>
          <View style={styles.imageItemInfo}>
            <Text style={styles.imageInfoTitle}>{alt_description}</Text>
            <Text style={styles.imageInfoAuthor}>{user.username}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        style={styles.list}
        numColumns={2}
      />
    </View>
  );
};

export default Home;

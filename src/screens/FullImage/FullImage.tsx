import React, {useEffect, useState} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/core';
import {RouteProp} from '@react-navigation/native';
import {getImageById} from '../../store/actions/action';
import {RootState} from '../../store/store';
import {ParamList} from '../../common';
import styles from './styles';

const FullImage: React.FC = () => {
  const {image} = useSelector((state: RootState) => state.imageReducer);
  const [dataStatus, setDataStatus] = useState(false);
  const dispatch = useDispatch();

  const route = useRoute<RouteProp<ParamList, 'Image'>>();
  const id = route.params.id;
  const color = route.params.color;

  const win = Dimensions.get('window');
  const ratio = win.width / 600;
  const SCALE = 1.5;

  const getPic = async id => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/${id}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`,
      );
      const json = await response.json();
      await dispatch(getImageById(json));
      setDataStatus(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPic(id);
  }, []);

  if (dataStatus) {
    return (
      <View
        style={{
          backgroundColor: color,
          height: win.height,
        }}>
        <Image
          source={{uri: image.urls.full}}
          height={362 * ratio}
          width={win.width}
          style={{
            width: win.width,
            height: 362 * ratio,
            marginTop: (362 * ratio) / SCALE,
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.loadingView}>
        <Text>Loading...</Text>
      </View>
    );
  }
};

export default FullImage;

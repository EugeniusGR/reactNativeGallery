import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getImageById} from '../../store/actions/action';
import {RootState} from '../../store/store';

const FullImage: React.FC = ({route}: any) => {
  const {image} = useSelector((state: RootState) => state.imageReducer);
  const {id, color} = route.params;
  const [dataStatus, setDataStatus] = useState(false);
  const dispatch = useDispatch();

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
    console.log(image.urls.regular);
    return (
      <View style={{backgroundColor: color}}>
        <Image
          source={{uri: image.urls.regular}}
          height={620}
          width={420}
          style={{width: 420, height: 620}}
        />
      </View>
    );
  } else {
    return <></>;
  }
};

export default FullImage;

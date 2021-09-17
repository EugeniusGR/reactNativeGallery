import React, { useEffect, useState } from 'react'
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'

const Home: React.FC = () => {
    const [data,setData] = useState([]);

    const getPic = async () => {
        try {
         const response = await fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9');
         const json = await response.json();
         setData(json);
       } catch (error) {
         console.error(error);
       }
     }

     useEffect(() => {
        getPic();
      }, []);

      const renderItem = ({item: { urls, alt_description, user }}) => {
        return (
            <TouchableOpacity style={styles.imageItem} activeOpacity={0.6}>
                <Image
                style={styles.image}
                source={{uri: urls.regular}}
                />
                <View style={styles.imageItemInfo}>
                    {alt_description && <Text>{alt_description}</Text>}
                    <Text style={styles.imageInfoAuthor}>{user.username}</Text>
                </View>
            </TouchableOpacity>
            
        )
      }
        return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Gallery</Text>
            </View>

            <FlatList
            data={data}
            renderItem={renderItem}
            style={styles.list}
            />
        </View>)
    
}

export default Home
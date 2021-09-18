import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Style = {
  container: ViewStyle;
  header: ViewStyle;
  headerText: TextStyle;
  image: ImageStyle;
  imageItem: ViewStyle;
  list: ViewStyle;
  imageItemInfo: ViewStyle;
  imageInfoTitle: TextStyle;
  imageInfoAuthor: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    height: '100%',
  },
  header: {
    padding: 10,
    backgroundColor: '#eef',
  },
  headerText: {
    fontSize: 22,
  },
  image: {
    height: 200,
    flex: 1,
  },
  list: {
    paddingVertical: 10,
  },
  imageItem: {
    display: 'flex',
    width: 190,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#eee',
    marginLeft: 10,
  },
  imageItemInfo: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    minHeight: 70,
    marginTop: 130,
  },
  imageInfoTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    height: 25,
  },
  imageInfoAuthor: {
    color: '#fff',
  },
});

export default styles;

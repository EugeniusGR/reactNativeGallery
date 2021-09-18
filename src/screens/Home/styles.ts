import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  imageItem: {
    display: 'flex',
    width: 190,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#eee',
    marginLeft: 10,
  },
  list: {
    paddingVertical: 10,
  },
  imageItemInfo: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    minHeight: 70,
    marginTop: 130,
  },
  imageInfoAuthor: {
    color: '#fff',
  },
  imageInfoTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    height: 25,
  },
});

export default styles;

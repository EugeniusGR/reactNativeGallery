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
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  list: {
    padding: 10,
  },
  imageItemInfo: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: 90,
    marginTop: 110,
  },
  imageInfoAuthor: {
    color: '#fff',
  },
  imageInfoTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;

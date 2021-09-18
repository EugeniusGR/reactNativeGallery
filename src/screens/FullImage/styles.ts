import {StyleSheet, ViewStyle} from 'react-native';

type Style = {
  loadingView: ViewStyle;
};

const Styles = StyleSheet.create<Style>({
  loadingView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
  },
});

export default Styles;

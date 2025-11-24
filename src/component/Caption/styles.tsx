import { StyleSheet } from 'react-native';
import { fonts } from '../../styles';

const styles = StyleSheet.create({
  captionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    ...fonts.BodySmallRegular,
    marginLeft: 4,
  },
});

export default styles;

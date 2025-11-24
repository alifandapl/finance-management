import { StyleSheet } from 'react-native';
import { layout } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: layout.radius2,
    borderWidth: 1,
  },
  space: {
    width: layout.spacing2,
    height: layout.spacing2,
  },
});

export default styles;

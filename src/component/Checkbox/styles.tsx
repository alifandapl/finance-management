import { StyleSheet } from 'react-native';
import { colors, layout } from '../../styles';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkebox: {
    borderWidth: 1,
    padding: 2,
    backgroundColor: colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: layout.spacing2,
  },
});

export default styles;

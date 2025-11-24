import { StyleSheet } from 'react-native';
import { colors, fonts, layout } from '../../styles';

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  label: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 16,
    height: 44,
    borderWidth: 1,
    borderRadius: layout.radius2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  placeholder: {
    color: colors.textPlaceholder,
  },
  caption: {
    marginTop: 8,
  },
  hint: {
    marginTop: 8,
  },
  divider: {
    width: 1,
    height: 20,
    marginHorizontal: 8,
    backgroundColor: colors.borderDark,
  },
  iconRight: { marginLeft: 12 },
  searchWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: layout.radius2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    ...fonts.BodySmallRegular,
    padding: 0,
    flex: 1,
    flexWrap: 'nowrap',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    height: 200,
  },
  modalWrapper: { paddingHorizontal: 16 },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

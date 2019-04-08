import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },

  input: {
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },

  submitButton: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    backgroundColor: colors.roxo,
  },

  fab: {
    backgroundColor: colors.success,
  },
});

export default styles;

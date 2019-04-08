import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  card: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    marginTop: metrics.baseMargin,
  },
});

export default styles;

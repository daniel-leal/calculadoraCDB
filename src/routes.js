import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main/index';
import Result from './pages/result/index';

const MainNavigator = createStackNavigator({
  Main,
  Result,
});

const Routes = createAppContainer(MainNavigator);

export default Routes;

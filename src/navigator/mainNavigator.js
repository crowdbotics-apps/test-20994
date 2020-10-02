import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList122913Navigator from '../features/ArticleList122913/navigator';
import ArticleList122912Navigator from '../features/ArticleList122912/navigator';
import ArticleList122911Navigator from '../features/ArticleList122911/navigator';
import Maps122893Navigator from '../features/Maps122893/navigator';
import Add-Item122892Navigator from '../features/Add-Item122892/navigator';
import Maps122888Navigator from '../features/Maps122888/navigator';
import UserProfile122884Navigator from '../features/UserProfile122884/navigator';
import Settings122847Navigator from '../features/Settings122847/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList122913: { screen: ArticleList122913Navigator },
ArticleList122912: { screen: ArticleList122912Navigator },
ArticleList122911: { screen: ArticleList122911Navigator },
Maps122893: { screen: Maps122893Navigator },
Add-Item122892: { screen: Add-Item122892Navigator },
Maps122888: { screen: Maps122888Navigator },
UserProfile122884: { screen: UserProfile122884Navigator },
Settings122847: { screen: Settings122847Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

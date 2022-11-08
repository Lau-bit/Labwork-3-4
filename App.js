import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/components/screens/HomeScreen";
import RestaurantScreen from "./src/components/screens/RestaurantScreen";

const navigator = createStackNavigator({
    Home: HomeScreen,
    Restaurant: RestaurantScreen
  }, {
    initalRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  });

export default createAppContainer(navigator);

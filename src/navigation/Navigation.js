import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Media from "../screens/Media";
import Web from "../screens/Web";
import Language from "../screens/Language";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoggedIn"component={DrawerStack}/>
    </Stack.Navigator>
  );
};

function DrawerStack() {
    return (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Media" component={Media} />
        <Drawer.Screen name="Web" component={Web} />
        <Drawer.Screen name="Language" component={Language} />
      </Drawer.Navigator>
    );
  }

  const AppNavigation = () =>{
    return(
    <RootStack/>
);
  }

  export default AppNavigation;
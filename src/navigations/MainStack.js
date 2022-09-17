import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen></Stack.Screen>
      <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;

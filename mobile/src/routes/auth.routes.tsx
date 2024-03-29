import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* import { Home } from "../screens/Home";
import { Game } from "../screens/Game"; */
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="signin"
        component={SignIn}
      />
    </Navigator>
  );
}
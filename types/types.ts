import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

// type for navigation props
export type RootStackParamList = {
    Home: undefined;
    Details: { index: number };
};

// types for Detail screen route and navigation
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Details'
>;

// types for home screen route and navigation
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Home'
>;

export type DetailRoute = DetailScreenRouteProp;
export type DetailNavigation = DetailScreenNavigationProp;
export type HomeRoute = HomeScreenRouteProp;
export type HomeNavigation = HomeScreenNavigationProp;
export type RootStackParameters = RootStackParamList;
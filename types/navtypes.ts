import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

// type for navigation props
export type RootStackParamList = {
    Home: undefined;
    Details: { index: number };
    Login: undefined;
    Signup: undefined;
};


// types for home screen route and navigation
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Home'
>;

// types for Detail screen route and navigation
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Details'
>;

// types for login screen route and navigation
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type LoginScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Login'
>;

// types for sign up screen route and navigation
type SignupScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type SignupScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Signup'
>;

// types for password reset screen route and navigation
type PwresetScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type PwresetScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Signup'
>;


export type HomeRoute = HomeScreenRouteProp;
export type HomeNavigation = HomeScreenNavigationProp;

export type LoginRoute = LoginScreenRouteProp;
export type LoginNavigation = LoginScreenNavigationProp;

export type PwresetRoute = PwresetScreenRouteProp;
export type PwresetNavigation = PwresetScreenNavigationProp;

export type SignupRoute = SignupScreenRouteProp;
export type SignupNavigation = SignupScreenNavigationProp;

export type DetailRoute = DetailScreenRouteProp;
export type DetailNavigation = DetailScreenNavigationProp;

export type RootStackParameters = RootStackParamList;
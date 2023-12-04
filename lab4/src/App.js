import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon    from 'react-native-vector-icons/FontAwesome5';


import Profile_Contact from './ProfileContact';
import Favorites_Screen from './Favorites';
import Contacts_Screen from './Contact';
import Store from './Store';

const Stack = createStackNavigator();

function ContactsScreens() {
    return(
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={
                {
                    headerShown: true
                }
            }
        >
            <Stack.Screen
                name="Contacts"
                component={Contacts_Screen}
                options={{title:"Contacts"}}
            />

            <Stack.Screen
                name="ProfileContact"
                component={Profile_Contact}
                options={{title:"Profile contact"}}
            />
        </Stack.Navigator>
    );
}

function FavoritesScreens() {
    return(
        <Stack.Navigator
            initialRouteName="Favorites"
            screenOptions={{
                headerShown: true
            }}
        >
            <Stack.Screen
                name="Favorites"
                component={Favorites_Screen}
                options={{title: "Favorites"}}
            />

            <Stack.Screen
                name='ProfileContact'
                component={Profile_Contact}
                options={{title:"Profile Contact"}}
            />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();
const TabNavigator =()=>{
    return(
        <Tab.Navigator
        initialRouteName="ContactsScreens"
        barStyle={{backgroundColor: "blue"}}
        labeled={false}
        activeTintColor={"greyLight"}
        inactiveColor={"greyDark"}
        >
            <Tab.Screen 
                name="Contacts"
                component={ContactsScreens}
                options={{
                    tabBarLabel: 'Contacts',
                    
                    tabBarIcon: 'format-list-bulleted'}}
            />

            <Tab.Screen 
                name="Favorites"
                component={FavoritesScreens}
                options={{
                    tabBarLabel: 'Favorties',
                    tabBarIcon: 'star-check'
                }}
            />
        </Tab.Navigator>
    );
};

const App_Run =() =>{
    return(
        <Provider store={Store}>
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
        </Provider>
    );
}

export default App_Run;
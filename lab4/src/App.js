import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons    from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = <Icon name="rocket" size={30} color="#900" />;


import ProfileContact from './ProfileContact';
import Favorites from './Favorites';
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
                component={ProfileContact}
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
                component={Favorites}
                options={{title: "Favorites"}}
            />

            <Stack.Screen
                name='ProfileContact'
                component={ProfileContact}
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
                    
                    tabBarIcon:() =>{<MaterialCommunityIcons name='format-list-bulleted'  size={26} />} 
                }}
            />

            <Tab.Screen 
                name="Favorites"
                component={FavoritesScreens}
                options={{
                    tabBarLabel: 'Favorties',
                    tabBarIcon:() =>{<MaterialCommunityIcons name='star-check'  size={26} />}
                   
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
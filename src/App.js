import 'react-native-gesture-handler';
import React from 'react';
import Contacts from './src/Contacts'
import Store from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileContact from './src/ProfileContact';
import Favorites from './Favorites';


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
                component={Contacts}
                options={{title:"Contacts"}}
            />

            <Stack.Screen
                name="ProfileContact"
                component={"ProfileContact"}
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
                options={{tabBarIcon: 'format-list-bulleted'}}
            />

            <Tab.Screen 
                name="Favorites"
                component={FavoritesScreens}
                options={{
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
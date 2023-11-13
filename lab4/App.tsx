import App_Run from './src/App';
//import React from 'react';
import ContactListItem from './src/ContactListItem';

import {View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native';
import React, {useState} from 'react';

import Contacts from './src/Contact';
import ContactThum from './src/ContactThum';



export default  App  =()=> {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);
return(
    //<ProfileContact/>
<App_Run/>
);
};

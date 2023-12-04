import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native';


const ContactListItem =({ name, avatar, phone, onPress}) => {
    return(
        <TouchableHighlight 
            underlayColor="grey"
            style={StyleSheet.container}
            onPress={onPress}
            >
                <View style={StyleSheet.contactInfo}>
                    <Image source={{uri: avatar}} style={StyleSheet.avatar}/>
                    <View style={styles.details}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{phone}</Text>
                    </View>
                </View>
            
        </TouchableHighlight>
    );
};



export default ContactListItem;
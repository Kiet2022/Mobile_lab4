import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native';
import ContactThumnail from './ContactThum';
import DetailListItem from './DetailListItem';
import {IconButton,} from 'react-native-paper';


const ProfileContact = ({route}) =>{
    const {contact} = route.params;
    const{id, avatar, name, email, phone, cell, favorite} =contact;

    return(
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumnail avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email}/>
                <DetailListItem icon="phone" title="Work" subtitle={phone} />
                <DetailListItem icon="smartphone" title="Pesonal" subtitle={cell}/>
                <View style={{alignItems:'center'}}>
                    <IconButton
                        icon={favorite==true?"star-check":"star-check-outline"}
                        iconColor="663399"
                        size={20}
                        onPress={() =>{}}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatarSection:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    detailsSection:{
        flex:1,
        backgroundColor: 'white'
    },
});

export default ProfileContact;
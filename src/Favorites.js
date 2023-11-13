import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, FlatList} from 'react-native';
import ContactThum from './ContactThum';
import {useSelector} from 'react-redux';


const KeyExtractor =({phone}) => phone;

const Favorites =({navigation}) =>{
    const {contacts} =useSelector((state) => state);
    const renderFavoriteThumbnail =({item}) => {
        const {avatar} = item;
        return(
            <ContactThum 
                avatar={avatar}
                onPress={() => navigation.navigate('ProfileContact', {contact: item})}
            />
        );
    };

    const favorites = contacts.filter((contact) => contact.favortie);
    return(
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={styles.list}
                renderItem={renderFavoriteThumbnail}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex:1
    },
    list:{
        alignItems: 'center'
    }
});

export default Favorites;
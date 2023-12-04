import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ContactThum from './ContactThum';

import {useSelector} from 'react-redux';


const KeyExtractor =({phone}) => phone;

const Favorites_Screen =({navigation}) =>{
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

    const favorites = contacts.filter((contact) => contact.favorite);
    return(
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={KeyExtractor}
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

export default Favorites_Screen;
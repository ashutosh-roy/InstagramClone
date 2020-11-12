import React from 'react';
import {Text, View} from 'react-native';
import ProfileView from '../../../ProfilePicture'
import styles from './styles'
const Header=({imageUri,name})=>
{
    return(
    <View style={styles.container}>
        <ProfileView uri={imageUri} size={40}/>
        <Text style={styles.name}>{name}</Text>
    </View>
    );
};
export default Header;
import React from 'react';
import {Text, View} from 'react-native';
import ProfileView from '../../../ProfilePicture'
const Header=({imageUri,name})=>
{
    return(
    <View>
        <ProfileView uri={imageUri}/>
        <Text>{name}</Text>
    </View>
    );
};
export default Header;
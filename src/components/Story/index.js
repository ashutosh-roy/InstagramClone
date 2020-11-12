import React from 'react';
import {View,Text} from 'react-native';
import ProfilePicture from '../ProfilePicture';
const story = ({imageUri,name}) =>
{
    return(
    <>
    <View>
        <ProfilePicture uri={imageUri} size={70}/>
        <Text>{name}</Text>
    </View>
    </>
    )
}

export default story;
import React from 'react';
import {Text,View} from 'react-native';
const Footer=({post})=>
{
    return (
    <View>
        <Text>{post.likesCount} likes</Text>
        <Text>{post.user.name} {post.caption}</Text>
        <Text>{post.postedAt}</Text>
    </View>
    )
};
export default Footer;
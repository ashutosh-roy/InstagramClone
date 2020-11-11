import React from 'react';
import {Text} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post/components';

const post ={
    user:
    {
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'Ashutosh'
    }
}
const HomeScreen = () => 
{ 
    return(
    <>
    <Text>Hello Instagram Clone</Text>
    <Stories/>
    <Post post={post}/>
    </>
    )
}
export default HomeScreen;

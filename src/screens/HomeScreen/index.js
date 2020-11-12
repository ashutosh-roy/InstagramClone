import React from 'react';
import {Text} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post/components';

const post ={
    user:
    {
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'Tarasha'
    },
    imageUri:"https://i.pinimg.com/originals/56/cb/64/56cb64b7bc427660d9d782dc7f060042.jpg",
    caption:"Pretty! #instagram #thegram",
    likesCount:1111,
    postedAt:"4 minutes ago"
}
const HomeScreen = () => 
{ 
    return(
    <>
    <Stories/>
    <Post post={post}/>
    </>
    )
}
export default HomeScreen;

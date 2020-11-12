import React from 'react';
import {View} from 'react-native';
import Story from '../Story';
import {FlatList} from 'react-native';
const data = [
    {
        imageUri:'https://aoifetroxel.files.wordpress.com/2010/07/flowers-164.jpg',
        name:'Flower 1'
    },
    {
        imageUri:'https://inspirationseek.com/wp-content/uploads/2014/05/Carnation-Flowers-Pictures.jpg',
        name:'Flower 2'
    },
    {
        imageUri:'https://i.pinimg.com/originals/fc/6e/38/fc6e38172295186b2b4cd93a323c57dc.jpg',
        name:'Flower 3'
    },
    {
        imageUri:'https://aoifetroxel.files.wordpress.com/2010/07/flowers-164.jpg',
        name:'Flower 4'
    },
    {
        imageUri:'https://inspirationseek.com/wp-content/uploads/2014/05/Carnation-Flowers-Pictures.jpg',
        name:'Flower 5'
    },
    {
        imageUri:'https://i.pinimg.com/originals/fc/6e/38/fc6e38172295186b2b4cd93a323c57dc.jpg',
        name:'Flower 6'
    },
    
    {
        imageUri:'https://aoifetroxel.files.wordpress.com/2010/07/flowers-164.jpg',
        name:'Flower 7'
    },
    {
        imageUri:'https://inspirationseek.com/wp-content/uploads/2014/05/Carnation-Flowers-Pictures.jpg',
        name:'Flower 8'
    },
    {
        imageUri:'https://i.pinimg.com/originals/fc/6e/38/fc6e38172295186b2b4cd93a323c57dc.jpg',
        name:'Flower 9'
    },   
]
const Stories = () =>
{   
    return(
    <FlatList 
    data= {data}
    keyExtractor={({name})=>name}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem ={({item})=><Story imageUri={item.imageUri} name={item.name}/>} 
    />

    // <View>
    //     <Story imageUri={data[0].imageUri} name={data[0].name} ></Story>
    //     <Story imageUri={data[1].imageUri} name={data[1].name} ></Story>
    //     <Story imageUri={data[2].imageUri} name={data[2].name} ></Story>
    //     <Story imageUri={data[3].imageUri} name={data[3].name} ></Story>
    // </View>
    )
}

export default Stories;
import React from 'react';
import {View} from 'react-native';
import Story from '../Story';
import {FlatList} from 'react-native';
const data = [
    {
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'Ashutosh'
    },{
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'Taras.CSV'
    },{
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'HEHE'
    },{
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'HEHEH'
    },
    {
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'HEHEH1'
    }
    ,{
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'HEHEH2'
    }
    ,{
        imageUri:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        name:'HEHEH3'
    }
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
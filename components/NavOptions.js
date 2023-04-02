import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import tw from "twrnc";
import Map from './Map';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <>
            
       <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={() => {Alert.alert(item.screen);navigation.navigate(item.screen)}}
                    style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
                    // disabled={!origin}
                >
                    <View style={tw`opacity-20`}>
                        <Image 
                            style={{width:120, height:120, resizeMode: "contain"}}
                            source={{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
       />
       <Map/>
       </>
    );
};

export default NavOptions;
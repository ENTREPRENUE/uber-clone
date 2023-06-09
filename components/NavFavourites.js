import { Icon } from "@rneui/base";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";


const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destinations: "London Eye, London, UK",
    },
];

const NavFavourites = () => {
    return <FlatList data={data} keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon 
                style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                name={Icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                <Text style={tw`text-gray-500`}>{item.destination}</Text>
            </View>
        </TouchableOpacity>
    )} />;
};

export default NavFavourites;
const styles = StyleSheet.create({});
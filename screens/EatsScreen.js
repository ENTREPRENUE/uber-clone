import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import MapView from 'react-native-maps';


const EatsScreen = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Text>Please Order your desires.</Text>
            </View>
            <View style={tw`h-1/2`}></View>
        </View>
    );
};

export default EatsScreen;

const styles = StyleSheet.create({});
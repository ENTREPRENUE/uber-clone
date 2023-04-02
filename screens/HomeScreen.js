import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";


const HomeScreen = () => {
    const dispatch = useDispatch();
    const apiKey = "AIzaSyA_EfzY7mCi2Lts1gr_YvWFsO2IdOHkxcE";
    return (
        <SafeAreaView style={tw`bg-white h-full`}> 
            <View style={tw`p-5`}>
                <Image  
                    style={{
                        width: 100, 
                        height:100, 
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
                <GooglePlacesAutocomplete 
                    placeholder="Where from?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }));
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    query={{
                        key: apiKey,
                        language: 'en',
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
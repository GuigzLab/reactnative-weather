import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import getCountryName from '../isoCountry';
import GoToButton from './GoToButton';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


function Home(props) {

   const [city, setCity] = useState('');
   const [desc, setDesc] = useState('');
   const [temp, setTemp] = useState('');
   const [min, setMin] = useState('');
   const [max, setMax] = useState('');
   const [imgUrl, setImgUrl] = useState('');
   const [country, setCountry] = useState('');

   async function getLocationAsync() {
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
         return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      } else {
         throw "Vous devez autoriser la géolocalisation";
      }
   }

   const getWeather = (loc) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&units=metric&appid=f43c6287d9d3b2c5ef92d6875df4fc24&lang=fr`)
         .then((response) => response.json())
         .then(r => {
            setCity(r.name)
            setDesc(r.weather[0].description)
            setImgUrl(r.weather[0].icon)
            setTemp(r.main.temp.toFixed(1))
            setMin(r.main.temp_min.toFixed(1))
            setMax(r.main.temp_max.toFixed(1))
            setCountry(getCountryName(r.sys.country))
         })
   }

   useEffect(() => {
      getLocationAsync().then(loc => {
         getWeather(loc)
       })
       .catch(erreur => {
         alert(erreur)
       })
   }, []);

   let date = new Date();
   const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
   const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
   let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

   return (
      <View style={styles.container}>
         <View style={styles.topBar}>
            <View style={styles.location}>
               <Text style={styles.city}>{city}</Text>
               <Text style={styles.country}>{country}</Text>
            </View>
            <View style={styles.status}>
               <Text style={styles.date}>{fullDate}</Text>
               <Text style={styles.desc}> {desc.charAt(0).toUpperCase() + desc.slice(1)} </Text>
            </View>
         </View>
         <View style={styles.weather}>
            <Image
               style={styles.image}
               source={{
                  uri: `http://openweathermap.org/img/wn/${imgUrl}@2x.png`,
               }}
            />
            <Text style={styles.temperature}>{temp}°</Text>
            <View style={styles.minMax}>
               <Text style={styles.min}>{min}° &darr;</Text>
               <Text style={styles.max}>{max}° &uarr;</Text>
            </View>
            <GoToButton screenName="Forecast" message="Voir les prévisions" />
         </View>
      </View>
   );

}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      padding: 28,
      // flex: 1,
      // justifyContent: "space-between",
      backgroundColor: '#f2b54a'
   },
   topBar: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "space-between",

   },
   location: {
   },
   city: {
      color: "white",
      fontSize: 32,
      fontWeight: "bold",
   },
   country: {
      color: "white",
      fontSize: 20,
      fontWeight: "400",
   },
   status: {
   },
   date: {
      textAlign: "right",
      fontSize: 24,
      color: "white",
      marginTop: 8,
      fontWeight: "500",
   },
   desc: {
      fontSize: 20,
      fontWeight: "400",
      color: "white",
      textAlign: "right",
      // marginTop: 16,
   },
   weather: {
      position: "absolute",
      // justifyContent: "center",
      // alignItems: "center",
      alignSelf: 'center',
      top: "20%",
      // bottom: 0,
      // left: 0,
      // right: 0,
   },
   image: {
      width: 280,
      height: 280
   },
   temperature: {
      fontSize: 80,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      marginTop: 8
   },
   minMax: {
      marginTop: 16,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 32
   },
   min: {
      color: "#779ecb",
      fontSize: 24,
      fontWeight: "bold",
   },
   max: {
      color: "#d83C2D",
      fontSize: 24,
      fontWeight: "bold",
   }
});

export default Home;

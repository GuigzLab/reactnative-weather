import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View } from 'react-native';
import ForecastElement from './ForecastElement';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


function Forecast() {

   const [list, setList] = useState([]);

   async function getLocationAsync() {
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
         return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      } else {
         throw "Vous devez autoriser la géolocalisation";
      }
   }

   function getForecast(loc) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&units=metric&appid=f43c6287d9d3b2c5ef92d6875df4fc24&lang=fr`)
         .then((response) => response.json())
         .then(r => {
            let l = []
            r.list.map((e, c) => {
               // on prend chaque liste avec le reste d'une division euclidienne par 8 nul pour avoir les prévisions des 5 prochains jours
               if ((c + 1) % 8 === 0) {
                  l.push(e)
               }
            })
            setList(l)
         })
   }

   useEffect(() => {
      getLocationAsync().then(loc => {
         getForecast(loc)
      })
         .catch(erreur => {
            alert(erreur)
         })
   }, []);


   return (
      <ScrollView style={styles.container}>
         {(list.length > 0)
            ? list.map((e, i) => {
               return <ForecastElement key={i} style={{ backgroundColor: "#6EB5FF" }} dt={e.dt} temp={e.main.temp} img={e.weather[0].icon} />
            })
            // Loader le temps que les données s'affichent
            : <View style={styles.loaderContainer}>
               <ActivityIndicator size="large" color="#ffffff" style />
            </View>
         }
      </ScrollView>
   );

}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      padding: 16,
      backgroundColor: '#f2b54a',
   },
   loaderContainer: {
      top: 100, 
   }
});

export default Forecast;

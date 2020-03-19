import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Home(props) {

   let date = new Date();
   const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
   const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
   const day = week[date.getDay()]
   let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

   return (
      <View style={styles.container}>
         <View style={styles.topBar}>
            <View style={styles.location}>
               <Text style={styles.city}>Paris</Text>
               <Text style={styles.country}>France</Text>
            </View>
            <View style={styles.status}>
               <Text style={styles.date}>{fullDate}</Text>
               <Text style={styles.desc}> Ensoleillé </Text>
            </View>
         </View>
         <View style={styles.weather}>
            <Image
               style={styles.image}
               source={require('../assets/sun.png')}
            />
            <Text style={styles.temperature}>18°</Text>
            <View style={styles.minMax}>
               <Text style={styles.min}>5° &darr;</Text>
               <Text style={styles.max}>20° &uarr;</Text>
            </View>
         </View>
      </View>
   );

}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      margin: 16,
      // flex: 1,
      // justifyContent: "space-between",
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
      justifyContent: "space-around"
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

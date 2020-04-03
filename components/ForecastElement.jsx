import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function ForecastElement(props) {

     let date = new Date(props.dt * 1000);
     const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
     const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
     let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

     // console.log(props.dt)


     return (
          <View style={[styles.container, props.style || {}]}>
               <View style={styles.time}>
                    <Text style={styles.day}>{week[date.getDay()]}</Text>
                    <Text style={styles.date}>{`${date.getDate()} ${months[date.getMonth()]}`}</Text>
               </View>
               <Image
                    style={styles.image}
                    source={{
                         uri: `http://openweathermap.org/img/wn/${props.img}@2x.png`,
                    }}
               />
               <Text style={styles.temperature}>{Math.round(props.temp)}°</Text>
          </View>
     );

}

const styles = StyleSheet.create({
     container: {
          height: "10%",
          backgroundColor: "lightgrey",
          borderRadius: 20,
          margin: 8,
          padding: 12,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
     },
     time: {
          flex: 1,
          maxWidth: "40%"
     },
     day: {
          color: "white",
          fontSize: 28,
          fontWeight: "600",
     },
     date: {
          color: "white",
          fontSize: 24,
          fontWeight: "500",
     },
     image: {
          width: 70,
          height: 70,
     },
     temperature: {
          fontSize: 40,
          fontWeight: "bold",
          color: "white"
     }
});

export default ForecastElement;

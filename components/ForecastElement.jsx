import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function ForecastElement(props) {

     return (
          <View style={[styles.container, props.style || {}]}>
               <View style={styles.time}>
                    <Text style={styles.day}>{props.day}</Text>
                    <Text style={styles.date}>{props.date}</Text>
               </View>
               <Image
                    style={styles.image}
                    source={require('../assets/sun.png')}
               />
               <Text style={styles.temperature}>15°</Text>
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

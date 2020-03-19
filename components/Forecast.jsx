import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ForecastElement from './ForecastElement';

function Forecast(props) {

   return (
      <ScrollView style={styles.container}>
           <ForecastElement style={{backgroundColor: "#6EB5FF"}} day={'Vendredi'} date={'20 Mars'}/>
           <ForecastElement style={{backgroundColor: "#FFABAB"}} day={'Samedi'} date={'21 Mars'}/>
           <ForecastElement style={{backgroundColor: "#02a699"}} day={'Dimanche'} date={'22 Mars'}/>
           <ForecastElement style={{backgroundColor: "#C5A3FF"}} day={'Lundi'} date={'23 Mars'}/>
           <ForecastElement style={{backgroundColor: "#F39402"}} day={'Mardi'} date={'23 Mars'}/>
           <ForecastElement style={{backgroundColor: "#6EB5FF"}} day={'Mercredi'} date={'25 Mars'}/>
           <ForecastElement style={{backgroundColor: "#f45c51"}} day={'Jeudi'} date={'26 Mars'}/>
      </ScrollView>
   );

}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      margin: 16,
   }
});

export default Forecast;

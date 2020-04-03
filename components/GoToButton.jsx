import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Custom element qui set à la navigation sans avoir à passer par react-navigation dans tous les composants
function GoToButton({ screenName, message }) {
  const navigation = useNavigation();

  return (
    <Button
      title={message}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

module.exports= GoToButton
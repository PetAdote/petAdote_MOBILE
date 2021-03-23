/*
import * as ImagePicker from 'expo-image-picker'
import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants';

export function imagem() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

}

export default imagem
*/
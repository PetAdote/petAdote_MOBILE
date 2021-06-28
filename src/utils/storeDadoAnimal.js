import AsyncStorage from '@react-native-community/async-storage'
import SyncStorage from 'sync-storage';

export async function getAnimalData(key) {
    const myAnimalData = await AsyncStorage.getItem(key);

    let animalData = JSON.parse(myAnimalData) || JSON;

    return animalData;
}

export async function saveAnimalData(key, newAnimalData) {

    SyncStorage.saveItem(key, newAnimalData)

    await AsyncStorage.setItem(key, JSON.stringify(newAnimalData))

    console.log("Dados do animal foram resgistrados com sucesso! ==> ", newAnimalData)
}


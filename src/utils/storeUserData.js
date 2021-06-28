import AsyncStorage from '@react-native-community/async-storage'
import SyncStorage from 'sync-storage';

export async function getUserData(key) {
    const myUserData = await AsyncStorage.getItem(key);

    let userData = JSON.parse(myUserData) || JSON;

    return userData;
}

export async function saveUserData(key, newUserData) {

    SyncStorage.saveItem(key, newUserData)

    await AsyncStorage.setItem(key, JSON.stringify(newUserData))

    console.log("Dados do usuário registrado com sucesso!", newUserData)
}


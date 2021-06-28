import AsyncStorage from '@react-native-community/async-storage'
import SyncStorage from 'sync-storage';

export async function getUserDataLogin(key) {
    const myUserDataLogin = await AsyncStorage.getItem(key);

    let userDataLogin = JSON.parse(myUserDataLogin) || JSON;

    return userDataLogin;
}

export async function saveUserDataLogin(key, newUserDataLogin) {

    SyncStorage.saveItem(key, newUserDataLogin)

    await AsyncStorage.setItem(key, JSON.stringify(newUserDataLogin))

    console.log("Dados do usuário no login registrado com sucesso! ==> ", newUserDataLogin)
}


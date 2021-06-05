import AsyncStorage from '@react-native-community/async-storage'

export async function getUserTokensSave(key) {
    const myUserTokens = await AsyncStorage.getItem(key);

    let userTokenSaves = JSON.parse(myUserTokens) || '';

    return userTokenSaves;
}

export async function saveUserToken(key, newUserToken) {

    await AsyncStorage.removeItem('userToken');

    await AsyncStorage.setItem(key, JSON.stringify(newUserToken))

    console.log("USER TOKEN SALVO COM SUCESSO")
}

export async function getUserRefreshTokensSave(key) {
    const myUserRefreshTokens = await AsyncStorage.getItem(key);

    let userRefreshTokenSaves = JSON.parse(myUserRefreshTokens) || '';

    return userRefreshTokenSaves;
}

export async function saveUserRefreshToken(key, newUserRefreshToken) {

    await AsyncStorage.removeItem('userRefreshToken');

    await AsyncStorage.setItem(key, JSON.stringify(newUserRefreshToken))

    console.log("USER REFRESH TOKEN SALVO COM SUCESSO")
}
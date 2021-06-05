import AsyncStorage from '@react-native-community/async-storage'

//BUSCAR OS TOKENS SALVOS
export async function getTokensSave(key) {
    const myTokens = await AsyncStorage.getItem(key);

    //Faz com que o token seja salvo como uma string para poder ser enviado a rest.
    let tokenSaves = JSON.parse(myTokens) || '';

    return tokenSaves;
}

//SALVAR TOKENS NO STORAGE
export async function saveToken(key, newToken) {

    //Limpa todos os tokens velhos.
    await AsyncStorage.removeItem('userInactiveToken');

    //Insere um novo token
    await AsyncStorage.setItem(key, JSON.stringify(newToken))

}

//--------REFRESH TOKENS ----------

export async function getRefreshTokensSave(key) {
    const myRefreshTokens = await AsyncStorage.getItem(key);

    let refreshTokenSaves = JSON.parse(myRefreshTokens) || '';

    return refreshTokenSaves;
}

export async function saveRefreshToken(key, newRefreshToken) {

    await AsyncStorage.removeItem('userInactiveRefreshToken');

    await AsyncStorage.setItem(key, JSON.stringify(newRefreshToken))

}

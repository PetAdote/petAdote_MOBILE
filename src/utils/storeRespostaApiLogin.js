import AsyncStorage from '@react-native-community/async-storage'

export async function getRespostaApi(key) {
    const myRespostaApi = await AsyncStorage.getItem(key);

    let respostaApi = JSON.parse(myRespostaApi) || JSON;

    return respostaApi;
}

export async function saveRespostaApi(key, newRespostaApi) {

    //await AsyncStorage.clear().then((response) => console.log(response))

    await AsyncStorage.setItem(key, JSON.stringify(newRespostaApi))

    console.log("Resposta api registrada com successo!", newRespostaApi)
}

import { useNavigation } from '@react-navigation/native';

export function navigateMenu() {

        const navigation = useNavigation();

        navigation.navigate('publicarPostagem')
  
}

export default navigateMenu
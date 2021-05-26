import React from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'

function BarraMomentos() {

  

        return (


            <View style={styles.BarraMarrom}>
                <ScrollView horizontal={true}>
                    
                    <TouchableOpacity style={styles.bolinhaStory}>
                        
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.bolinhaStory}>
                        
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.bolinhaStory}>
                        
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.bolinhaStory}>
                        
                    </TouchableOpacity>

                                        
                    <TouchableOpacity style={styles.bolinhaStory}>
                        
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.bolinhaStory}>
                        
                    </TouchableOpacity>

                </ScrollView>
            </View>
            
            
        )
    
}

const styles = StyleSheet.create({
    BarraMarrom: {
        backgroundColor: '#783f04',
        width: 230,
        height: 55,
        justifyContent: 'center',
        //flexDirection: 'row',
    },
    bolinhaStory: {
        backgroundColor: '#674ea7',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        margin: 4,
    },
})

export default BarraMomentos

import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'


export default function Items (props) {
    
    const ctgr = props.ctgr
    return (
      <View style={styles.main_container}>
        <TouchableOpacity>
        <ImageBackground source={ctgr.back} style={styles.back}>
        
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{ctgr.title}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={3}>{ctgr.overview}</Text>
          </View>
        </View>
       
        <View>
          
          <Image source={ctgr.src} style={styles.img} />
        </View>

        </ImageBackground>
        </TouchableOpacity>

      </View>
     
    )
  }


const styles = StyleSheet.create({
  main_container: {
    height: 100,
    marginTop:5,
    marginBottom:10,
    borderWidth: 3,
    borderColor: "#098569",
    borderRadius: 10
  },
  img: {
    width: 120,
    height: 90,
    margin: 0,
    borderRadius:10
   
  },
  back: {
    flexDirection: 'row',
    height:95
  },
  content_container: {
    flex: 1,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom:5
  },
  title_text: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
    flex: 7
  },
  description_text: {
    textAlign: 'right',
    fontStyle: 'italic',
    color: '#666666',
    marginRight:5,
    marginLeft:5,
    fontSize: 12
  },
  
})


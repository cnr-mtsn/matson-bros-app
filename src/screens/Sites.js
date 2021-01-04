import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native'
import { Container } from '../styles/style.js';
import { firebase } from '../firebase/config';
import SiteCard from '../components/SiteCard';

const Sites = ({navigation}) => {

  const siteRef = firebase.firestore().collection('sites');
  const [sites, setSites] = useState([]);

  useEffect(() => {
    siteRef
    .orderBy('createdAt', 'desc')
    .onSnapshot(
      querySnapshot => {
        const data = []
        querySnapshot.forEach(doc => {
          const site = doc.data()
          site.id = doc.id
          data.push(site)
        });
        setSites(data)
        console.log(sites);
      },
      error => {
        console.log(error)
      }
      )
    }, [])

  const renderSite = ({item}) => (
    <SiteCard site={item} style={{margin: 5}}/>
  )

  return (
    <Container>
      <FlatList
        style={{ margin: 25}}
        data={sites}
        renderItem={renderSite}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

export default Sites


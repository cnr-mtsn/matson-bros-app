import React from 'react'
import { View, Text } from 'react-native'
import {Card} from '../styles/style';

export default function SiteCard({site}) {
  return (
    <Card>
      <Text>{site.id}</Text>
    </Card>
  )
}

import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

var { width, height } = Dimensions.get('window');

export default function TrendingMovies({data}) {
  return (
    <View classNmae="mb-8">
        <Text classNmae="text-white text-xl mx-4">Em alta</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({})
import React, { useState } from 'react'
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from "../theme";
import TrendingMovies from '../Components/trendingMovies';
import MovieList from '../Components/movieList';

const ios = Platform.OS == 'ios';

export default function HomeScreen() {
    const [trending, setTrending ] = useState([1,2,3]);
    const [upcoming, setUpcoming ] = useState([1,2,3]);
    const [topRated, setTopRated ] = useState([1,2,3]);
  return (
    <View className="flex-1 bg-neutral-800">
      <View className={ios ? "-mb-3" : "mb-2"}>
        <StatusBar style='light' />
        
        <View className="flex-row justify-between items-center mx-3 mt-12">
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>Prime</Text> <Text style={{  }}>MOV</Text>
          </Text>

          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >

        <TrendingMovies data={trending}/>

        <MovieList title="Próximos lançamentos" data={upcoming}/>

      </ScrollView>
    </View>
  )
}
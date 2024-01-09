import { View, Text, ScrollView } from 'react-native';
import React from 'react';

//Hero Icons
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ title, description, id }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={'#00ccbb'} />
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          url={'https://links.papareact.com/gn7'}
          title={'Sushi'}
          rating={5}
          genre={'Japanese'}
          address={'0000'}
          description={'Description'}
          dishes={[]}
          long={0}
          lat={300.0}
        />
        <RestaurantCard
          id={2}
          url={'https://links.papareact.com/gn7'}
          title={'Sushi'}
          rating={5}
          genre={'Japanese'}
          address={'0000'}
          description={'Description'}
          dishes={[]}
          long={0}
          lat={300.0}
        />
        <RestaurantCard
          id={3}
          url={'https://links.papareact.com/gn7'}
          title={'Sushi'}
          rating={5}
          genre={'Japanese'}
          address={'0000'}
          description={'Description'}
          dishes={[]}
          long={0}
          lat={300.0}
        />
      </ScrollView>
    </View>
  );
}

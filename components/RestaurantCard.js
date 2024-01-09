import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

//Hero Icons
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';

export default function RestaurantCard({
  id,
  url,
  title,
  rating,
  genre,
  address,
  description,
  dishes,
  long,
  lat,
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: url,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-ls pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={'green'} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>. {genre}
          </Text>
        </View>
        <View>
          <MapPinIcon color={'gray'} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

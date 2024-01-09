import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function CategoryCard({ url, title }) {
  return (
    <TouchableOpacity>
      <Image
        source={{
          url: url,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold"></Text>
    </TouchableOpacity>
  );
}

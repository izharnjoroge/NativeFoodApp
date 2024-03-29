import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ url, title }) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: url,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

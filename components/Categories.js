import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../constants/constants';
import category from '../foodapp/schemas/category';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/*Category Card*/}
      {categories.map((category) => (
        <View key={category.id} className="space-x-5">
          <CategoryCard url={category.image} title={category.name} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;

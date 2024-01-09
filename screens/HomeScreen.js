//Ui Imports
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';

//Hero Icons
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

//Nav Hook
import { useNavigation } from '@react-navigation/native';

//Components
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-200 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color={'#00ccbb'} />
      </View>
      {/* Search Field*/}
      <View className="flex-row space-x-2 items-center pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1  bg-gray-200 ">
          <SearchIcon />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={35} color={'#00ccbb'} />
      </View>

      {/*Body*/}
      <ScrollView className="bg-gray-100">
        {/*Categories*/}
        <Categories />
        {/*Popular Products*/}

        <FeaturedRow title={'Popular'} description={'Popular Producs'} id={1} />
        <FeaturedRow
          title={'Offers Near You'}
          description={'Popular Producs'}
          id={2}
        />
        <FeaturedRow
          title={'Tasty Discounts'}
          description={'Popular Producs'}
          id={3}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

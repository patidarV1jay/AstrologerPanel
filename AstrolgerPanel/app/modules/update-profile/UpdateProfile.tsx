import { CaretDown, ListChecks, ListDashes } from 'phosphor-react-native';
import React from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Categories, ScreenString } from '../../constants';
import { Colors, moderateScale } from '../../themes';
import styles from './UpdateProfileStyles';
import useUpdateProfile from './useUpdateProfile';

const UpdateProfile = () => {
  const {
    isDropDownVisible,
    setIsDropDownVisible,
    categoryDropDown,
    filterCategoryDropDown,
    setCategory1,
    category1,
    setCategory2,
    category2,
    setCategory3,
    category3,
  } = useUpdateProfile();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.contentConatiner}
        onPress={() => setIsDropDownVisible(!isDropDownVisible)}>
        {!isDropDownVisible ? (
          <ListDashes
            weight="bold"
            size={moderateScale(28)}
            color={Colors.dark}
          />
        ) : (
          <ListChecks
            weight="bold"
            size={moderateScale(28)}
            color={Colors.dark}
          />
        )}
        <Text style={styles.text}>
          {isDropDownVisible
            ? ScreenString.selectedCategories
            : ScreenString.category}
        </Text>
      </Pressable>
      {isDropDownVisible && (
        <View style={styles.dropDownContainer}>
          <View style={styles.dropDownContentContainer}>
            <>
              <View
                style={styles.section}
                onTouchEnd={() => filterCategoryDropDown('category1')}>
                <Text style={styles.categoryText}>{category1}</Text>
                <CaretDown
                  size={moderateScale(25)}
                  weight="bold"
                  color={Colors.orange}
                />
              </View>
              {categoryDropDown === 'category1' && (
                <View style={styles.flatlistView}>
                  <FlatList
                    data={Categories}
                    renderItem={({ item }) => {
                      return (
                        <View style={styles.padding}>
                          <Text
                            style={styles.categories}
                            onPress={() => {
                              setCategory1(item.category);
                              filterCategoryDropDown('');
                            }}>
                            {item.category}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </>
            <>
              <View
                style={styles.section}
                onTouchEnd={() => filterCategoryDropDown('category2')}>
                <Text style={styles.categoryText}>{category2}</Text>
                <CaretDown
                  size={moderateScale(25)}
                  weight="bold"
                  color={Colors.orange}
                />
              </View>
              {categoryDropDown === 'category2' && (
                <View style={styles.flatlistView}>
                  <FlatList
                    data={Categories}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ padding: moderateScale(5) }}>
                          <Text
                            style={styles.categories}
                            onPress={() => {
                              setCategory2(item.category);
                              filterCategoryDropDown('');
                            }}>
                            {item.category}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </>
            <>
              <View
                style={styles.section}
                onTouchEnd={() => filterCategoryDropDown('category3')}>
                <Text style={styles.categoryText}>{category3}</Text>
                <CaretDown
                  size={moderateScale(25)}
                  weight="bold"
                  color={Colors.orange}
                />
              </View>
              {categoryDropDown === 'category3' && (
                <View style={styles.flatlistView}>
                  <FlatList
                    data={Categories}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ padding: moderateScale(5) }}>
                          <Text
                            style={styles.categories}
                            onPress={() => {
                              setCategory3(item.category);
                              filterCategoryDropDown('');
                            }}>
                            {item.category}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{ScreenString.update}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default UpdateProfile;

import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ADVANTURES, CATEGORIES, COLORS, SPACING } from "../helpers/constants";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <SafeAreaView>
      <View style={{ padding: SPACING * 2 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: SPACING * 3, fontWeight: "bold", color: COLORS.dark }}>Discover</Text>
          <Image style={{ height: SPACING * 5, width: SPACING * 5, borderRadius: SPACING * 5 }}
                 source={require("../assets/images/Avatar.png")} />
        </View>
        <ScrollView style={{ marginVertical: SPACING * 2 }} horizontal>
          {
            CATEGORIES.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING }}
                key={category.id}
                onPress={() => setActiveCategory(index)}
              >
                <Text style={[{
                  fontSize: SPACING * 2,
                  color: COLORS.dark
                }, activeCategory === index && { color: COLORS.primary }]}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
        <Text style={{ fontSize: SPACING * 1.7, color: COLORS.dark }}>
          {CATEGORIES[activeCategory].tours.length + " "}
          {CATEGORIES[activeCategory].title}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.7}
          decelerationRate="fast"
          pagingEnabled
          style={{ marginVertical: SPACING * 2 }}
        >
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity style={{
              width: width * 0.7,
              height: width * 0.9,
              overflow: "hidden",
              borderRadius: SPACING * 2,
              marginRight: SPACING * 2
            }} key={index}>
              <View style={{
                position: "absolute",
                zIndex: 1,
                height: "100%",
                width: "100%",
                backgroundColor: COLORS.transparent,
                justifyContent: "space-between",
                padding: SPACING
              }}>
                <TouchableOpacity style={{
                  alignSelf: "flex-end",
                  padding: SPACING / 2,
                  backgroundColor: COLORS.white,
                  borderRadius: SPACING * 5,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Icon name="heart-outline" size={SPACING * 4} color={COLORS.primary} />
                </TouchableOpacity>
                <Text style={{
                  fontSize: SPACING * 2,
                  color: COLORS.white,
                  fontWeight: "700",
                  marginLeft: SPACING
                }}>{tour.title}</Text>
              </View>
              <Image source={tour.image} style={{ width: "100%", height: "100%" }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: SPACING * 2, fontWeight: "bold", color: COLORS.dark }}>Feeling Adventures?</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: SPACING * 1.4, fontWeight: "500", color: COLORS.primary }}>Show all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          style={{ marginVertical: SPACING * 2 }}
          showsHorizontalScrollIndicator={false}
        >
          {ADVANTURES.map(adventure => (
            <TouchableOpacity key={adventure.id}
                              style={{ marginRight: SPACING * 3, padding: SPACING, alignItems: "center" }}>
              <View style={{ width: SPACING * 3, height: SPACING * 3 }}>
                <Image source={adventure.image} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
              </View>
              <Text style={{ textTransform: "uppercase", fontSize: SPACING, marginTop: SPACING }}>
                {adventure.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

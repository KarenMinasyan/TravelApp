import React, { useEffect, useMemo, useRef } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, SPACING } from "../helpers/constants";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useAppSelector } from "../hook";
import { filterTourByIdSelector } from "../helpers/reduxSelectors";
import navigations from "../navigations";

const TourDetailScreen = ({ navigation }: any) => {
  const bottomSheetModalRef = useRef<any>(null);
  const tour = useAppSelector(filterTourByIdSelector);

  const snapPoints = useMemo(() => ["40%", "60%"], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleBack = () => {
    navigation.navigate('Home');
  }

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <ImageBackground source={tour.image} style={styles.preview}>
          <SafeAreaView>
            <View style={styles.container}>
              <TouchableOpacity style={styles.back} onPress={handleBack}>
                <Icon name="chevron-back" size={SPACING * 3} color={COLORS.primary} />
              </TouchableOpacity>
              <View style={styles.favorite}>
                <TouchableOpacity style={styles.heart}>
                  <Icon name="heart-outline" size={SPACING * 3} color={COLORS.primary} />
                </TouchableOpacity>
                <View>
                  {tour.images.map((gallery: any, index: number) => (
                    <TouchableOpacity key={index} style={styles.tour}>
                      <Image source={gallery.image} style={styles.tourImg} />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: SPACING * 3 }}
          enablePanDownToClose={false}
        >
          <View style={styles.detail}>
            <View style={styles.detailWrapper}>
              <Text style={styles.tourTitle}>{tour.title}</Text>
              <View style={styles.cost}>
                <Text style={styles.price}>{tour.price}</Text>
                <Text>/person</Text>
              </View>
            </View>
            <View style={styles.tabs}>
              <View style={styles.tabsWrapper}>
                <TouchableOpacity style={styles.tab}>
                  <Text style={styles.overview}>Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                  <Text>Reviews</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <View style={styles.infoWrapper}>
                  <View style={styles.time}>
                    <Icon name="time" size={SPACING * 3} color={COLORS.primary} />
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.duration}>Duration</Text>
                    <Text style={styles.tourDuration}>{tour.duration}</Text>
                  </View>
                </View>
                <View style={styles.infoWrapper}>
                  <View style={styles.star}>
                    <Icon name="star" size={SPACING * 3} color={COLORS.primary} />
                  </View>
                  <View style={styles.rateWrapper}>
                    <Text style={styles.rate}>Rating</Text>
                    <Text style={styles.outOf}>{tour.rating} out of 5</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.description}>{tour.description}</Text>
              </View>
            </View>
          </View>
          <View style={styles.book}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.bookNow}>Book Now</Text>
              <Icon name="arrow-forward" size={SPACING * 3} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export default TourDetailScreen;

const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 500
  },
  container: {
    paddingHorizontal: SPACING,
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%"
  },
  back: {
    backgroundColor: COLORS.light,
    width: SPACING * 4,
    height: SPACING * 4,
    borderRadius: SPACING * 2,
    justifyContent: "center",
    alignItems: "center"
  },
  favorite: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: SPACING * 8
  },
  heart: {
    backgroundColor: COLORS.light,
    width: SPACING * 4,
    height: SPACING * 4,
    borderRadius: SPACING * 2,
    justifyContent: "center",
    alignItems: "center"
  },
  tour: {
    width: SPACING * 6,
    height: SPACING * 6,
    padding: SPACING / 2,
    backgroundColor: COLORS.white,
    borderRadius: SPACING,
    marginBottom: SPACING
  },
  tourImg: {
    width: "100%",
    height: "100%",
    borderRadius: SPACING
  },
  detail: {
    backgroundColor: COLORS.white,
    padding: SPACING * 3,
    borderRadius: SPACING * 3,
    bottom: SPACING * 3
  },
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tourTitle: {
    fontSize: SPACING * 2,
    fontWeight: "bold",
    color: COLORS.dark
  },
  cost: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  price: {
    fontSize: SPACING * 2,
    fontWeight: "bold",
    color: COLORS.dark
  },
  tabs: {
    marginVertical: SPACING * 2
  },
  tabsWrapper: {
    flexDirection: "row",
    marginBottom: SPACING * 2
  },
  tab: {
    paddingVertical: SPACING,
    marginRight: SPACING * 2
  },
  overview: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: SPACING * 1.7
  },
  info: {
    marginBottom: SPACING * 2,
    flexDirection: "row"
  },
  infoWrapper: {
    flexDirection: "row"
  },
  time: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: { width: SPACING / 2, height: SPACING },
    shadowRadius: SPACING / 2,
    shadowOpacity: 0.2,
    padding: SPACING / 2,
    borderRadius: SPACING / 2,
    marginRight: SPACING,
    elevation: 2
  },
  rating: {
    marginRight: SPACING * 2
  },
  duration: {
    fontSize: SPACING + 1,
    marginBottom: SPACING / 2,
    textTransform: "uppercase"
  },
  tourDuration: {
    fontSize: SPACING * 1.6,
    fontWeight: "700"
  },
  star: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: { width: SPACING / 2, height: SPACING },
    shadowRadius: SPACING / 2,
    shadowOpacity: 0.1,
    padding: SPACING / 2,
    borderRadius: SPACING / 2,
    marginRight: SPACING,
    elevation: 1
  },
  rateWrapper: {
    marginRight: SPACING * 2
  },
  rate: {
    fontSize: SPACING + 1,
    marginBottom: SPACING / 2,
    textTransform: "uppercase"
  },
  outOf: {
    fontSize: SPACING * 1.6,
    fontWeight: "700"
  },
  description: {
    color: COLORS.dark
  },
  book: {
    position: "absolute",
    bottom: SPACING * 2,
    width: "100%"
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: SPACING * 1.5,
    marginHorizontal: SPACING * 1.6,
    borderRadius: SPACING * 2,
    flexDirection: "row",
    justifyContent: "center"
  },
  bookNow: {
    color: COLORS.white,
    fontSize: SPACING * 2,
    fontWeight: "bold",
    marginRight: SPACING * 7,
    marginLeft: SPACING * 7
  }
});

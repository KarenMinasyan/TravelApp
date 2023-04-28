import React, { useState } from 'react';
import {
	Dimensions,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ADVANTURES, CATEGORIES, COLORS, SCREENS, SPACING } from 'src/helpers/constants';
import { useAppDispatch } from 'src/hook';
import { chosenTourId } from 'src/store/tours/toursSlice';

const { primary, dark, white, transparent } = COLORS;
const { DETAIL } = SCREENS;

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }: any) => {
	const [activeCategory, setActiveCategory] = useState<number>(0);
	const dispatch = useAppDispatch();

	const handleChooseTour = (id: number) => () => {
		dispatch(chosenTourId(id));
		navigation.navigate(DETAIL);
	};

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.discover}>
					<Text style={styles.discoverTitle}>Discover</Text>
					<Image style={styles.account} source={require('../assets/images/Avatar.png')} />
				</View>
				<ScrollView style={styles.categories} horizontal>
					{CATEGORIES.map((category, index) => (
						<TouchableOpacity
							style={styles.category}
							key={category.id}
							onPress={() => setActiveCategory(index)}
						>
							<Text style={[styles.categoryTitle, activeCategory === index && { color: primary }]}>
								{category.title}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
				<Text style={styles.activities}>
					{CATEGORIES[activeCategory].tours.length + ' '}
					{CATEGORIES[activeCategory].title}
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					snapToInterval={width * 0.7}
					decelerationRate='fast'
					pagingEnabled
					style={styles.tours}
				>
					{CATEGORIES[activeCategory].tours.map((tour, index) => (
						<TouchableOpacity style={styles.card} key={index} onPress={handleChooseTour(index)}>
							<View style={styles.tour}>
								<TouchableOpacity style={styles.favorite}>
									<Icon name='heart-outline' size={SPACING * 4} color={primary} />
								</TouchableOpacity>
								<Text style={styles.tourTitle}>{tour.title}</Text>
							</View>
							<Image source={tour.image} style={styles.tourPreview} />
						</TouchableOpacity>
					))}
				</ScrollView>
				<View style={styles.options}>
					<Text style={styles.feeling}>Feeling Adventures?</Text>
					<TouchableOpacity>
						<Text style={styles.all}>Show all</Text>
					</TouchableOpacity>
				</View>
				<ScrollView
					horizontal
					pagingEnabled
					style={styles.adventures}
					showsHorizontalScrollIndicator={false}
				>
					{ADVANTURES.map((adventure) => (
						<TouchableOpacity key={adventure.id} style={styles.adventure}>
							<View style={styles.adventurePreview}>
								<Image source={adventure.image} resizeMode='contain' style={styles.adventureImg} />
							</View>
							<Text style={styles.adventureTitle}>{adventure.title}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		padding: SPACING * 2,
	},
	discover: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	discoverTitle: {
		fontSize: SPACING * 3,
		fontWeight: 'bold',
		color: dark,
	},
	account: {
		height: SPACING * 5,
		width: SPACING * 5,
		borderRadius: SPACING * 5,
	},
	categories: {
		marginVertical: SPACING,
	},
	category: {
		marginRight: SPACING,
	},
	categoryTitle: {
		fontSize: SPACING * 2,
		color: dark,
	},
	activities: {
		fontSize: SPACING * 1.7,
		color: dark,
	},
	tours: {
		marginVertical: SPACING * 2,
	},
	card: {
		width: width * 0.7,
		height: width * 0.9,
		overflow: 'hidden',
		borderRadius: SPACING * 2,
		marginRight: SPACING * 2,
	},
	tour: {
		position: 'absolute',
		zIndex: 1,
		height: '100%',
		width: '100%',
		backgroundColor: transparent,
		justifyContent: 'space-between',
		padding: SPACING,
	},
	favorite: {
		alignSelf: 'flex-end',
		padding: SPACING / 2,
		backgroundColor: white,
		borderRadius: SPACING * 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tourTitle: {
		fontSize: SPACING * 2,
		color: white,
		fontWeight: '700',
		marginLeft: SPACING,
	},
	tourPreview: {
		width: '100%',
		height: '100%',
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	feeling: {
		fontSize: SPACING * 2,
		fontWeight: 'bold',
		color: dark,
	},
	all: {
		fontSize: SPACING * 1.4,
		fontWeight: '500',
		color: primary,
	},
	adventures: {
		marginVertical: SPACING * 2,
	},
	adventure: {
		marginRight: SPACING * 3,
		padding: SPACING,
		alignItems: 'center',
	},
	adventurePreview: {
		width: SPACING * 3,
		height: SPACING * 3,
	},
	adventureImg: {
		width: '100%',
		height: '100%',
	},
	adventureTitle: {
		textTransform: 'uppercase',
		fontSize: SPACING,
		marginTop: SPACING,
	},
});

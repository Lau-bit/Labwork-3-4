import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation"
import {elevation} from "./common/styles"

function RestaurantItem({restaurant, navigation}) {
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("Restaurant", {id: restaurant.id})}>
        <View style={[styles1.elevation, styles1.container]}>
            <Image style={styles1.image} source={{uri: restaurant.image_url}}/>
            <View style={styles1.infoContainer}>
                <Text style={styles1.header}>{restaurant.name}</Text>
                <View style={styles1.info}>
                <Text style={styles1.rating}>{restaurant.rating}</Text>
                <Text style={styles1.money}>{restaurant.price}</Text>
            </View>
        </View>
        </View>
        </TouchableOpacity>
            )
            }


            const styles1 = StyleSheet.create({
                elevation,
                container: {
                    backgroundColor: "white",
                    height: 100,
                    alignSelf: "stretch",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10

                },
                image: {
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    marginLeft: 10
                },
                infoContainer: {
                    flex: 1,
                    paddingHorizontal: 10,
                },
                header: {
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 4
                },
                info: {
                    flexDirection: "row",
                },
                rating: {
                    marginRight: 20,
                },
                money: {
                    color: "gold",
                },
            });

export default withNavigation(RestaurantItem);

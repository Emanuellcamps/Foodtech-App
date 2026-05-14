import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity , Image } from "react-native";
import SmallButton from "../components/SmallButton";
import CardProducts from "../components/CardProducts";
import { RotateInDownLeft } from "react-native-reanimated";
import { router } from "expo-router";

export default function Home() {
  const productList = [
    {
  id : 1,
  title : "Cheese Burguer",
  description : "Wendy's Burguer",
  image : require ('../assets/image/cardHome/Cheese Burguer.jpeg'),
  price : 22.00,
    },

     {
  id : 2,
  title : "Nutri Burger",
  description : "Focus on health",
  image : require ('../assets/image/cardHome/NutriBurguer.jpeg'),
  price : 19.00,
    },
    
    {
  id : 3,
  title : "Chicken Burguer",
  description : "A surprising difference",
  image : require ('../assets/image/cardHome/Chicken Burguer.jpg'),
  price : 20.00,
    },
    
    {
  id : 4,
  title : "Big Burguer",
  description : "Big appetites",
  image : require ('../assets/image/cardHome/Big Burguer.jpeg'),
  price : 25.00,
    },
    
    {
  id : 5,
  title : "Colossus Burguer",
  description : "Extreme situations",
  image : require ('../assets/image/cardHome/Colossus Burguer.jpeg'),
  price : 27.00,
    },
    
    {
  id : 6,
  title : "Simpls Burguer",
  description : "Well done basic",
  image : require ('../assets/image/cardHome/Simpls Burguer.jpeg'),
  price : 13.00,
    },
    
    {
  id : 7,
  title : "Cheddar Burguer",
  description : "The more the merrier",
  image : require ('../assets/image/cardHome/Cheedar Burguer.jpg'),
  price : 22.00,
    },
    
    {
  id : 8,
  title : "House Burguer",
  description : "House Dish",
  image : require ('../assets/image/cardHome/Home Burguer.jpg'),
  price : 23.00,
    },
]
   
  





  return ( 
    <View style = {styles.screenBack}>
    <View style={styles.textAlign}>

      <Text style={styles.nameApp}> FoodTech </Text>
      <Text style= {styles.loganApp}> From the app to your couch </Text>
    </View>

    <View style = {styles.configButtonBack}>
    <SmallButton image={require('../assets/icon/sair (1).png')} route='/' />
    </View>

    <View>
     <TextInput style = {styles.barradePesquisa} placeholder="Search" />
    </View>


     <View style={styles.containerFlatlistCards}>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id.toString()}  // Item é o objeto atual da lista
          numColumns={2}
          contentContainerStyle={{
          paddingLeft : 18,
          paddingTop: 19 }}
        renderItem={({ item }) => (
          <CardProducts
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )}
      />
      
     <View style= {styles.bodyButtons}>
           <SmallButton image = {require('../assets/icon/botao-home (1).png')} route = '/cart'/>  
           <SmallButton image = {require('../assets/icon/carrinho-de-compras (1).png')} route = '/cart'/>  
           <SmallButton image = {require('../assets/icon/do-utilizador.png')} route = '/userProfile'/>  
    </View>

    </View>
    
    
    </View>
  )
}

const styles = StyleSheet.create ({
screenBack : {
  flex : 1,
  backgroundColor : '#fafafa'


},
containerFlatlistCards : {
  backgroundColor : '#f4eded',
  alignItems : 'center',
  height :400,
  top :330,
  borderRadius : 10,
  marginTop : -230,
  
},

textAlign : {
  justifyContent : "flex-start",
  alignItems : "flex-start",
  marginTop : 45,
  
  
},

nameApp : { 
  fontFamily : "Roboto",
  fontSize : 35,
  marginLeft : 5,
  
},

loganApp : {
  marginLeft : 13,
},

barradePesquisa : {
  backgroundColor : '#f3efef',
   borderRadius : 10,
    paddingTop : 20,
    paddingLeft : 18,
    paddingBottom : 20,
    textAlign : 'left',
    marginLeft : 20,
    marginRight : 20,
    marginBottom : 10,
    textAlignVertical : 'center',
},

bodyButtons : {
  flexDirection : 'row',
  backgroundColor : "#ef2a39",
  justifyContent : 'space-between',
  alignItems : 'flex-start',
  paddingTop :10 ,
  width : "100%",
  marginBottom : -60,
  
  
},

configButtonBack : {
 marginLeft : 321,
 top : -60
},
});



 

 
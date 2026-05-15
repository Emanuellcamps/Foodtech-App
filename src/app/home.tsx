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
  description : "Triplo Queijo",
  image : require ('../assets/image/cardHome/Cheese Burguer.jpeg'),
  price : 22.00,
  composition : [
   "* Pão",
   "* 3x Fatias de Queijo",
   "* 1x Carne de Hamburguer",
   "* 1x Ovo",
   "* Catupiry"
  ]
    },

     {
  id : 2,
  title : "Nutri Burger",
  description : "Saúde em foco",
  image : require ('../assets/image/cardHome/NutriBurguer.jpeg'),
  price : 19.00,
  composition : [
   "* Pão",
   "* 2x Folhas de Alface",
   "* 3x Rodelas de Tomate",
   "* 3x Rodelas de Cebola Roxa",
   "* 1x Fatia de Cheedar",
   "* 1x Ovo",
   "* 1x Carne Artesanal"
  ]
    },
    
    {
  id : 3,
  title : "Chicken Burguer",
  description : "Diferencial que supreende",
  image : require ('../assets/image/cardHome/Chicken Burguer.jpg'),
  price : 20.00,
  composition : [
   "* Pão",
   "* 1x Fatias de Cheedar",
   "* 1x Carne de Hamburguer de Frango",
   "* 1x Ovo",
   "* 1x Queijo",
   "* 3x Rodelas de Cebola Roxa",
   "* 3x Rodelas de Picles",
  ]
    },
    
    {
  id : 4,
  title : "Big Burguer",
  description : "Grandes Apetites",
  image : require ('../assets/image/cardHome/Big Burguer.jpeg'),
  price : 25.00,
  composition : [
   "* Pão",
   "* 2x Carnes de Hamburguer",
   "* 4x Fatias de Cheedar",
   "* 3x Rodelas de Picles",
   "* 3x Rodelas de Cebola Roxa",
   "* Queijo Derretido",

  ]
    },
    
    {
  id : 5,
  title : "Colossus Burguer",
  description : "Situações Extremas",
  image : require ('../assets/image/cardHome/Colossus Burguer.jpeg'),
  price : 27.00,
  composition : [
   "* Tripla Camada de Pão",
   "* 3x Fatias de Queijo",
   "* 2x Carne de Hamburguer",
   "* 6x Rodelas de Tomate",
   "* 4x Nugget de Frango",
   "* 3X Fatias de Presunto",
   "* 2x Folhas de Alface",
   "* 3x Rodelas de Pepino",
   "* 2x Ovo"
  ]
    },
    
    {
  id : 6,
  title : "Simpls Burguer",
  description : "Básico bem feito",
  image : require ('../assets/image/cardHome/Simpls Burguer.jpeg'),
  price : 13.00,
  composition : [
   "Pão",
   "* 1x Fatias de Queijo",
   "* 1x Carne de Hamburguer",
   "* 1x Fatia de Cheedar",
   "* 6x Rodelas de Picles",
   "* 1x Fatia de Presunto",
   "* 3x Rodelas de Tomate",
   "* 2x Bacon",
   "* 4x Rodelas de Cebola Roxa",
  ]
    },
    
    {
  id : 7,
  title : "Cheddar Burguer",
  description : "Quanto mais, melhor!",
  image : require ('../assets/image/cardHome/Cheedar Burguer.jpg'),
  price : 22.00,
  composition : [
   "* Pão",
   "* 2x Fatias de Cheedar",
   "* 1x Carne de Hamburguer",
   "* 1x Alface",
   "* 2x Rodelas de Tomate",
   "* 3x Rodelas de Cebola Branca",
  ]
    },
    
    {
  id : 8,
  title : "House Burguer",
  description : "Especial da casa",
  image : require ('../assets/image/cardHome/Home Burguer.jpg'),
  price : 23.00,
  composition : [
   "* Pão",
   "* 2x Fatias de Cheedar",
   "* Queijo Derretido",
   "* 2x Carne de Hamburguer",
   "* 2x Rodelas de Tomate",
   "* 1x Fatia de Presunto",
   "* 4x Rodelas de Picles",
   "* 1x Folha de Alface",
   "* 3x Rodelas de Cebola Roxa",
  ]
    },
]
   
  





  return ( 
    <View style = {styles.screenBack}>
    <View style={styles.textAlign}>

      <Text style={styles.nameApp}> FoodTech </Text>
      <Text style= {styles.loganApp}> Do App direto para o seu sofá </Text>
    </View>

    <View style = {styles.configButtonBack}>
    <SmallButton image={require('../assets/icon/sair (1).png')} route='/' />
    </View>

    <View>
     <TextInput style = {styles.barradePesquisa} placeholder="Pesquisar" />
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
            composition={item.composition}
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



 

 
import {ScrollView,StyleSheet} from "react-native"
import CardProducts from "../components/CardProducts"


export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <CardProducts
                image="https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg"
                title="Cheese Burger"
                description="Wendy´s Burger"
                value={19.99}
            />
            
        </ScrollView>
    )
};

const styles = StyleSheet.create ({
    container : {
 backgroundColor : '#f5f1f1',
    }
})

   
    
    
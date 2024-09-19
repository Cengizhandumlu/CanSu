import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

export default function Layout() {

    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => { 
                    let iconName;
                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (route.name === 'sepet') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    else if (route.name === 'profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } 
                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
            })}
        />
    );
}
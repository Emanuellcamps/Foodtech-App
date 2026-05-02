import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{headerShown : false }} /> //Excluindo nomeação da router no header
      )  //
} 

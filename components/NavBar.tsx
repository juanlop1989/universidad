import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../components/Home/Home'
import EstudianteComponent from '../components/EstudianteComponent'
import AsignaturaComponent from '../components/AsignaturaComponent'
import AsignaturaEstudianteComponent from '../components/AsignaturaEstudianteComponent'

export default function NavBar() {

 const drawer= createDrawerNavigator()

  return (
   
    <NavigationContainer>
        <drawer.Navigator initialRouteName='Home'>
            <drawer.Screen name='Home' component={Home}/>
            <drawer.Screen name='Estudiantes' component={EstudianteComponent}/>
            <drawer.Screen name='Asignaturas' component={AsignaturaComponent}/>
            <drawer.Screen name="Asignar Asignatura" component={AsignaturaEstudianteComponent} />
        </drawer.Navigator>
    </NavigationContainer>
  )
}
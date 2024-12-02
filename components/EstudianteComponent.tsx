import { View, Text, Alert, FlatList ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../service/api';
import { Estudiante } from '../modelo/Estudiante';

export default function EstudianteComponent() {

  const [nombre, setNombre]= useState<string>('');
  const [apellido, serApellido] = useState<string> ('')
  const [correo, setCorreo]= useState<string> ('')
  const [telefono, setTelefono] = useState<string> ('')
  const [idEstudiante, setIdEstudiante] = useState<number> (0)

  const [estudiantes, setEstudiantes]= useState([]);


  const getEstudiante = async () =>{
    try {
        
        const response= await api.get('estudiante');
        setEstudiantes(response.data)

    } catch (error) {
        Alert.alert('Error', 'Ocurrio un error' + error)
    }
  }

  useEffect(()=>{
        getEstudiante()
  }, [])

  return (
    <View style={styles.container}>
      
    <FlatList 
      data={estudiantes}
      keyExtractor={(item:Estudiante) => item.idestudiante.toString()}
      renderItem={({item})=>(

        <View style={styles.card}>
            <Text>{ `${item.nombre}  ${item.apellido}`}</Text>
            <Text>{item.correo}</Text>
            <Text>{item.telefono} </Text>
        </View>
       
      )}

      >


    </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
      marginTop:10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop:5
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
  });
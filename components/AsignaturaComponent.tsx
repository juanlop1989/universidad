import React, { useState, useEffect } from "react";
import api from "../service/api";
import { View, Text, Alert, FlatList, StyleSheet, TextInput, Button,} from "react-native";
import { Asignatura } from "../modelo/Asignatura";

export default function AsignaturaComponent() {
  const [nombre, setNombre] = useState<string>(""); 
  const [estado, setEstado] = useState<string>(""); 
  const [asignaturas, setAsignaturas] = useState<Asignatura[]>([]); 

  const getAsignaturas = async () => {
    try {
      const response = await api.get("/asignatura");
      setAsignaturas(response.data);
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al obtener asignaturas: " + error);
    }
  };

  const guardarAsignatura = async () => {
    if (!nombre || !estado) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      const nuevaAsignatura = { nombre, estado }; 
      await api.post("/asignatura", nuevaAsignatura);
      Alert.alert("Asignatura agregada correctamente");
      setNombre(""); 
      setEstado(""); 
      getAsignaturas(); 
    } catch (error) {
      Alert.alert("Error", "No se pudo agregar la asignatura: " + error);
    }
  };

  useEffect(() => {
    getAsignaturas();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Formulario de Asignaturas</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}

          onChangeText={setNombre} 
        />

        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado} 
        />

        <Button title="Agregar Asignatura" onPress={guardarAsignatura} />
      </View>

      <FlatList
        data={asignaturas}
        keyExtractor={(item: Asignatura) => item.idasignatura.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.nombre}</Text>
            <Text>{item.estado}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 5,
  },
});

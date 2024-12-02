import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../service/api';
import { Estudiante } from '../modelo/Estudiante';
import { Asignatura } from '../modelo/Asignatura';

export default function AsignaturaEstudianteComponent() {
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
    const [asignaturas, setAsignaturas] = useState<Asignatura[]>([]);
    const [selectedEstudiante, setSelectedEstudiante] = useState<number | null>(null);
    const [selectedAsignatura, setSelectedAsignatura] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const estudianteResponse = await api.get('/estudiante');
                const asignaturaResponse = await api.get('/asignatura');
                setEstudiantes(estudianteResponse.data);
                setAsignaturas(asignaturaResponse.data);
            } catch (error) {
                Alert.alert('Error', 'Error al cargar datos: ' + error);
            }
        };

        fetchData();
    }, []);

    const asignarAsignatura = async () => {
        if (!selectedEstudiante || !selectedAsignatura) {
            Alert.alert('Error', 'Seleccione un estudiante y una asignatura');
            return;
        }

        try {
            const response = await api.post('/estudiante-asignatura', {
                idestudiante: selectedEstudiante,
                idasignatura: selectedAsignatura,
            });
            Alert.alert('Asignatura asignada correctamente');
        } catch (error) {
            Alert.alert('Error al asignar asignatura: ' + error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Asignar Asignatura a Estudiante</Text>

            <Text>Seleccionar Estudiante:</Text>
            <Picker
                selectedValue={selectedEstudiante}
                onValueChange={(itemValue) => setSelectedEstudiante(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Seleccione un estudiante" value={null} />
                {estudiantes.map((estudiante) => (
                    <Picker.Item
                        key={estudiante.idestudiante}
                        label={`${estudiante.nombre} ${estudiante.apellido}`}
                        value={estudiante.idestudiante}
                    />
                ))}
            </Picker>

            <Text>Seleccionar Asignatura:</Text>
            <Picker
                selectedValue={selectedAsignatura}
                onValueChange={(itemValue) => setSelectedAsignatura(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Seleccione una asignatura" value={null} />
                {asignaturas.map((asignatura) => (
                    <Picker.Item
                        key={asignatura.idasignatura}
                        label={asignatura.nombre}
                        value={asignatura.idasignatura}
                    />
                ))}
            </Picker>

            <Button title="Asignar" onPress={asignarAsignatura} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    picker: {
        marginBottom: 16,
        backgroundColor: '#fff',
    },
});

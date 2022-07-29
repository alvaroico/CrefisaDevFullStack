import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import {create, deleteTarefa, editarTarefa, getAll} from './api/api';
import Task from './components/Task';
import {ITarefasAll} from './interfaces/tarefas.api.interface';

export default function App() {
  const [tarefa, setTarefa] = useState();
  const [tarefaItens, setTarefaItens] = useState<ITarefasAll[]>([]);
  const [update, setUpdate] = useState(1);
  const [editar, setEditar] = useState(0);

  const handleAdicionarTarefaRecarga = () => {
    Keyboard.dismiss();
    setTarefa(null);
    setUpdate(update + 1);
  };

  const deletarTarefa = (index: number) => {
    deleteTarefa(index)
      .then(result => {
        handleAdicionarTarefaRecarga();
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll()
      .then(async response => {
        const json = (await response.json()) as ITarefasAll[];
        setTarefaItens(json);
      })
      .catch(err => {
        console.log(err);
      });
    return () => {
      getAll()
        .then(async response => {
          const json = (await response.json()) as ITarefasAll[];
          setTarefaItens(json);
        })
        .catch(err => {
          console.log(err);
        });
    };
  }, [update]);

  // import {View, StyleSheet, Button, Alert} from 'react-native';

  const showAlert = (index: number, description: string) =>
    Alert.alert(
      'Olá',
      'Gostaria de Deletar ou Editar',
      [
        {
          text: 'Deletar',
          onPress: () => deletarTarefa(index),
          style: 'destructive',
        },
        {
          text: 'Editar',
          onPress: () => {
            setEditar(index);
            setTarefa(description);
          },
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Tarefas do Dia</Text>
          <View style={styles.items}>
            {tarefaItens.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    showAlert(item.id, item.description);
                  }}>
                  {item ? <Task text={item.description} /> : ''}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Qual é a Tarefa'}
          value={tarefa}
          onChangeText={text => setTarefa(text)}
        />
        <TouchableOpacity
          onPress={() => {
            if (editar !== 0) {
              editarTarefa(editar, tarefa)
                .then(async editado => {
                  (await editado.json()) as ITarefasAll[];
                  handleAdicionarTarefaRecarga();
                })
                .catch(err => {
                  console.log(err);
                });
            } else {
              create(tarefa)
                .then(async criado => {
                  (await criado.json()) as ITarefasAll[];
                  handleAdicionarTarefaRecarga();
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

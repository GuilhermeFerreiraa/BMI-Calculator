import React, { useState } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList
} from 'react-native'
import ResultImc from './ResultImc/'
import styles from './style'

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('Preencha o peso e a altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  // função imcCalculator serve para calcular o IMC
  function imcCalculator() {
    let heightFormat = height.replace(',', '.')
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
    setImcList(arr => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate()
      setErrorMessage('campo obrigatório*')
    }
  }

  // verificar se o valor não está vazio
  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc('Seu IMC é igual: ')
      setTextButton('Calcular Novamente')
      setErrorMessage(null)
    } else {
      verificationImc()
      setImc(null)
      setTextButton('Calcular')
      setMessageImc('Preencha o peso e altura')
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />

          <Text style={styles.formLabel}>Peso:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.23"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exibitionResultImc}>
          <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
            style={styles.formLabel}
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator = {false}
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return(
          <Text style={styles.resultImcListItem}>
            <Text style={styles.textResultItemList}>Resultado IMC = </Text>{item.imc}
          </Text>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

import React, { Component } from 'react';
import {
  Container, Content, Text, Card, CardItem, Body, View,
} from 'native-base';
import { StatusBar } from 'react-native';
import { colors } from '../../styles';
import styles from './styles';

export default class Result extends Component {
  static navigationOptions = {
    title: 'Resultado',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: colors.darker,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigation } = this.props;
    const retornoBruto = navigation.getParam('retornoBruto', 0);
    const retornoLiquido = navigation.getParam('retornoLiquido', 0);
    const aliquota = navigation.getParam('aliquota', 0);
    const impostoAPagar = navigation.getParam('impostoAPagar', 0);

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Content style={styles.container}>
          <Card style={styles.card}>
            <CardItem>
              <Body>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Retorno Bruto:</Text>
                  <Text>
                    {' R$'}
                    {Number(retornoBruto).toFixed(2)}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Retorno Líquido:</Text>
                  <Text>
                    {' R$'}
                    {Number(retornoLiquido).toFixed(2)}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Alíquota:</Text>
                  <Text>
                    {' '}
                    {Number(aliquota * 100)}
                    {'%'}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Imposto a Pagar:</Text>
                  <Text>
                    {' R$'}
                    {Number(impostoAPagar).toFixed(2)}
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

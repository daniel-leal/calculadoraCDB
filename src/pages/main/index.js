import React, { Component } from 'react';
import {
  Container, Content, Input, Form, Button, Text,
} from 'native-base';
import { StatusBar, Alert } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Calculadora de CDB',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: colors.darker,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    valorAInvestir: '',
    taxaCDI: '',
    taxaCDB: '',
    prazoMeses: '',
  };

  calcularRetornoBruto = () => {
    const {
      valorAInvestir, prazoMeses, taxaCDB, taxaCDI,
    } = this.state;

    try {
      const taxaRendimento = ((taxaCDB / 100) * taxaCDI) / 12;
      const rendimentoPrazo = taxaRendimento * prazoMeses;

      return Number((rendimentoPrazo / 100) * valorAInvestir + Number(valorAInvestir)).toFixed(2);
    } catch (err) {
      return Alert.alert(err.message);
    }
  };

  calcularAliquota = () => {
    const { prazoMeses } = this.state;

    if (prazoMeses < 6) {
      return 0.225;
    }
    if (prazoMeses < 12) {
      return 0.2;
    }
    if (prazoMeses < 24) {
      return 0.175;
    }
    return 0.15;
  };

  calcularImpostoAPagar = () => {
    const { valorAInvestir } = this.state;
    return Number((this.calcularRetornoBruto() - valorAInvestir) * this.calcularAliquota()).toFixed(
      2,
    );
  };

  calcularRetornoLiquido = () => this.calcularRetornoBruto() - this.calcularImpostoAPagar();

  renderForm() {
    const {
      valorAInvestir, prazoMeses, taxaCDI, taxaCDB,
    } = this.state;
    const { navigation } = this.props;

    return (
      <Form>
        <Input
          style={styles.input}
          placeholder="Valor a investir (R$)"
          value={valorAInvestir}
          keyboardType="numeric"
          onChangeText={valor => this.setState({ valorAInvestir: valor })}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          style={styles.input}
          placeholder="Prazo em meses"
          value={prazoMeses}
          keyboardType="numeric"
          onChangeText={valor => this.setState({ prazoMeses: valor })}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          style={styles.input}
          placeholder="Taxa CDI (%) a.a"
          value={taxaCDI}
          keyboardType="numeric"
          onChangeText={valor => this.setState({ taxaCDI: valor })}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          style={styles.input}
          placeholder="Taxa CDB (%)"
          value={taxaCDB}
          keyboardType="numeric"
          onChangeText={valor => this.setState({ taxaCDB: valor })}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button
          block
          style={styles.submitButton}
          onPress={() => navigation.navigate('Result', {
            retornoBruto: this.calcularRetornoBruto(),
            aliquota: this.calcularAliquota(),
            impostoAPagar: this.calcularImpostoAPagar(),
            retornoLiquido: this.calcularRetornoLiquido(),
          })
          }
        >
          <Text>Calcular</Text>
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Content>{this.renderForm()}</Content>
      </Container>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;

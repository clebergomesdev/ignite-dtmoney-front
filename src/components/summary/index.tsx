import React from 'react';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { Card, Container } from './styles';

const Summary: React.FC = () => {
  return (
    <Container>
        <Card>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp  size={32} color="#00b37e"/>
            </header>
            <strong>R$ 0,00</strong>
        </Card>

        <Card>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown  size={32} color="#f75a68"/>
            </header>
            <strong>R$ 0,00</strong>
        </Card>

        <Card variant='green'>
            <header>
                <span>Total</span>
                <CurrencyDollar  size={32} color="#fff"/>
            </header>
            <strong>R$ 0,00</strong>
        </Card>
    </Container>
  );
}

export default Summary;
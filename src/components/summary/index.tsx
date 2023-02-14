import React, { useContext } from 'react';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { Card, Container } from './styles';
import { currencyFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks';

const Summary: React.FC = () => {
    const summary = useSummary();
    
  return (
    <Container>
        <Card>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp  size={32} color="#00b37e"/>
            </header>
            <strong>{currencyFormatter.format(summary.income)}</strong>
        </Card>

        <Card>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown  size={32} color="#f75a68"/>
            </header>
            <strong>{currencyFormatter.format(summary.outcome)}</strong>
        </Card>

        <Card variant='green'>
            <header>
                <span>Total</span>
                <CurrencyDollar  size={32} color="#fff"/>
            </header>
            <strong>{currencyFormatter.format(summary.total)}</strong>
        </Card>
    </Container>
  );
}

export default Summary;
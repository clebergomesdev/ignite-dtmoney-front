import React, { useContext, useEffect, useState } from 'react';
import { Header, SearchForm, Summary, TransactionsTable } from '../../components';
import { Transaction, TransactionsContext } from '../../contexts';

import { Container, Content } from './styles';

const Transactions: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
        <Header />
        <Summary />

        <Content>
          <SearchForm />
          <TransactionsTable transactions={transactions} />
        </Content>
    </Container>
  );
}

export default Transactions;
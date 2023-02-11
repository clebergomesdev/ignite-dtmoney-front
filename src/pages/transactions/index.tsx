import React from 'react';
import { Header, SearchForm, Summary, TransactionsTable } from '../../components';

import { Container, Content } from './styles';

const Transactions: React.FC = () => {
  return (
    <Container>
        <Header />
        <Summary />

        <Content>
          <SearchForm />
          <TransactionsTable />
        </Content>
    </Container>
  );
}

export default Transactions;
import React from 'react';

import { Container, PriceContainer } from './styles';

const TransactionsTable: React.FC = () => {
  return (
    (<Container>
        <tbody>
          <tr>
            <td width='50%'>Desenvolvimento de site</td>
            <td><PriceContainer variant='income'>R$ 10,00</PriceContainer></td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr>
          <tr>
            <td width='50%'>Hamburguer</td>
            <td><PriceContainer variant='outcome'>R$ 10,00</PriceContainer></td>
            <td>Alimentação</td>
            <td>13/04/2023</td>
          </tr>
          <tr>
            <td width='50%'>Desenvolvimento de site</td>
            <td><PriceContainer variant='income'>R$ 10,00</PriceContainer></td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr>
        </tbody> 
    </Container>)
  );
}

export default TransactionsTable;
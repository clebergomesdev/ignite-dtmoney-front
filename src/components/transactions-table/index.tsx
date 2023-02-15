import React from 'react'
import { Transaction } from '../../contexts'
import { currencyFormatter, dateFormatter } from '../../utils/formatter'

import { Container, PriceContainer } from './styles'

interface TransactionsTableProps {
  transactions: Transaction[]
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  return (
    <Container>
      <tbody>
        {transactions.map((item) => (
          <tr key={item.id}>
            <td width="50%">{item.description}</td>
            <td>
              <PriceContainer variant={item.type}>
                {currencyFormatter.format(item.amount)}
              </PriceContainer>
            </td>
            <td>{item.category}</td>
            <td>{dateFormatter.format(new Date(item.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}

export default TransactionsTable

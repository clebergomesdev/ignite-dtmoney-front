import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib'

export type Transaction = {
  id: number
  description: string
  category: string
  amount: number
  type: 'income' | 'outcome'
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (transaction: Transaction) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (transaction: Transaction) => {
    const response = await api.post('transactions', transaction)

    setTransactions((data) => [response.data, ...data])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

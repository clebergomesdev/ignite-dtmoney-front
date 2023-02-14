import { createContext, ReactNode, useEffect, useState } from "react";

export type Transaction = {
    id: number;
    description: string;
    category: string;
    amount: number;
    type: 'income' | 'outcome'
    createdAt: string;
  }

interface TransactionsContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const url = new URL('http://localhost:3000/transactions');

    if(query) {
      url.searchParams.append('q', query);
    }

    const response = await fetch(url).then(resp => resp);
    const data = await response.json();

    setTransactions(data);
  }
  
  useEffect(() => {
    fetchTransactions();
  }, []);
  
    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}
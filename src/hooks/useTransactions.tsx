import  React ,{ ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //sintaxe mais simples pra criar um tipo sem precisar fazer outra interface

interface TransactionsProviderProps {
    children: ReactNode           // reactNode aceita qualquer conteudo valido pro react
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);    //criaçao do contexto

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {               // requisiçao para api
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data;

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context;
}
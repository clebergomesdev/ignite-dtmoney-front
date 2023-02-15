import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import React, { useContext } from 'react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '../button'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'
import { Transaction, TransactionsContext } from '../../contexts'

const transactionSchema = z.object({
  // id: z.number(),
  description: z.string(),
  category: z.string(),
  amount: z.number(),
  type: z.enum(['income', 'outcome']),
  // createdAt: z.string(),
})

type TransactionSchema = z.infer<typeof transactionSchema>

const NewTransactionModal: React.FC = () => {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<TransactionSchema>({
    resolver: zodResolver(transactionSchema),
  })

  const handleCreateTransaction = (data: TransactionSchema) => {
    const { description, category, amount, type } = data

    createTransaction({
      description,
      category,
      amount,
      type,
      createdAt: new Date().toISOString(),
    } as Transaction)

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('amount', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="income"
            render={({ field }) => (
              <TransactionTypeContainer
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionTypeContainer>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

export default NewTransactionModal

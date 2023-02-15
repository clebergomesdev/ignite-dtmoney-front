import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '../button'

import { Container } from './styles'
import { TransactionsContext } from '../../contexts'

const searchSchema = z.object({
  query: z.string(),
})

type SearchSchema = z.infer<typeof searchSchema>

const SearchForm: React.FC = () => {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  })

  const handleSearchTransaction = async (data: SearchSchema) => {
    await fetchTransactions(data.query)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Buscar por transações"
        {...register('query')}
      />
      <Button variant="outlined" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </Container>
  )
}

export default SearchForm

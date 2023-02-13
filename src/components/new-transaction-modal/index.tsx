import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import React from 'react'
import Button from '../button';
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';

const NewTransactionModal: React.FC = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form action=''>
          <input type='text' placeholder='Descrição' required />
          <input type='number' placeholder='Preço' required />
          <input type='text' placeholder='Categoria' required />

          <TransactionTypeContainer>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton value='outcome'>
              <ArrowCircleDown size={24}/>
              Saída
            </TransactionTypeButton>
          </TransactionTypeContainer>

          <Button type='submit'>Cadastrar</Button>
        </form>
        
      </Content>
    </Dialog.Portal>
  )
}

export default NewTransactionModal;
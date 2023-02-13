import React from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/images/logo.png'
import Button from '../button';

import { Container, Content } from './styles';
import NewTransactionModal from '../new-transaction-modal';

const Header: React.FC = () => {
  return (
    <Container>
        <Content>
            <img src={logo} alt='' />
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button>Nova transação</Button>
              </Dialog.Trigger>
              <NewTransactionModal />
            </Dialog.Root>
        </Content>
    </Container>
  );
}

export default Header;
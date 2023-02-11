import React from 'react';

import logo from '../../assets/images/logo.png'
import Button from '../button';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <Content>
            <img src={logo} alt='' />
            <Button>Nova transação</Button>
        </Content>
    </Container>
  );
}

export default Header;
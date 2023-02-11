import { FileSearch, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import Button from '../button';

 import { Container } from './styles';

const SearchForm: React.FC = () => {
  return (<Container>
    <input type='text' placeholder='Buscar por transações' />
    <Button variant='outlined'>
        <MagnifyingGlass size={20} />
        Buscar
    </Button>
  </Container>);
}

export default SearchForm;
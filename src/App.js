import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import NewTransForm from './components/NewTransForm';

function App() {
  return (
    <Container>
      <MainHeader title={'Budget'} />
      <DisplayBalance title='Your Balance' value='2400.50' size='small' />
      <DisplayBalances />
      <MainHeader title='History' type='h3' />
      <EntryLine description='income' value='$150.00' />
      <EntryLine description='expense' value='$150.00' isExpense />
      <EntryLine description='income' value='$150.00' />
      <MainHeader title='Add new transaction' type='h3' />
      <NewTransForm />
    </Container>
  );
}

export default App;

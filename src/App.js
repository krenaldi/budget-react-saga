import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const entries = useSelector(state => state.entries)
  const {isOpen, id} = useSelector(state => state.modals)

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if(entry.isExpense){
        return totalExpense += Number(entry.value);
      } else {
        return totalIncome += Number(entry.value);
      }
    })
    setTotal(totalIncome - totalExpense);
    setExpense(totalExpense);
    setIncome(totalIncome);
    // console.log(`total income ${totalIncome} and total expenses ${totalExpense}`)
  }, [entries])

  return (
    <Container>
      <MainHeader title={'Budget'} />
      <DisplayBalance title='Your Balance' value={total} size='small' />
      <DisplayBalances income={income} expense={expense} />
      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm  />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;

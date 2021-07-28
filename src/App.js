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
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const entries = useSelector(state => state.entries)

  useEffect(() => {
    if (!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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

  const addEntry = () => {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    console.log('result', result);
    console.log('entries', entries)
    // setEntries(result);
    resetEntry();
  }

  const editEntry = id => {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title={'Budget'} />
      <DisplayBalance title='Your Balance' value={total} size='small' />
      <DisplayBalances income={income} expense={expense} />
      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} editEntry={editEntry} />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;

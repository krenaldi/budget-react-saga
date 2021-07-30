import { Form } from 'semantic-ui-react';
import ButtonGroup from './ButtonGroup';
import EntryForm from './EntryForm';
import useEntryData from '../hooks/useEntryData';

function NewEntryForm() {
  const {
    description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
  } = useEntryData();

  return (
    <Form unstackable>
      <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
      <ButtonGroup addEntry={addEntry} />
    </Form>
  )
}

export default NewEntryForm;

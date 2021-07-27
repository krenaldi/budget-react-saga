import { Form } from 'semantic-ui-react';
import ButtonGroup from './ButtonGroup';
import EntryForm from './EntryForm';

function NewEntryForm({ addEntry, description, value, isExpense, setDescription, setValue, setIsExpense }) {
  return (
    <Form unstackable>
      <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
      <ButtonGroup addEntry={addEntry} />
    </Form>
  )
}

export default NewEntryForm;

import React from 'react';
import { Form, Segment, Checkbox } from 'semantic-ui-react';

function EntryForm({ description, value, isExpense, setDescription, setValue, setIsExpense }) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icons='tags'
          label='Description'
          onChange={(event) => setDescription(event.target.value)}
          placeholder='New transaction'
          value={description}
          width={12}
        />
        <Form.Input
          icon='dollar'
          iconPosition='left'
          label='Value'
          onChange={(event) => setValue(event.target.value)}
          placeholder='100.00'
          value={value}
          width={4}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox checked={isExpense} label='is expense' onChange={() => setIsExpense(oldState => !oldState)} toggle />
      </Segment>
    </>
  )
}

export default EntryForm

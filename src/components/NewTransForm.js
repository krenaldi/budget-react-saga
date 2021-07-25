import { Form } from 'semantic-ui-react';
import ButtonGroup from './ButtonGroup';

function NewTransForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icons='tags'
          label='Description'
          placeholder='New transaction'
          width={12}
        />
        <Form.Input
          icon='dollar'
          iconPosition='left'
          label='Value'
          placeholder='100.00'
          width={4}
        />
      </Form.Group>
      <ButtonGroup />
    </Form>
  )
}

export default NewTransForm

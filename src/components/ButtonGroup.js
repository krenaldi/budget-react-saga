import { Button } from 'semantic-ui-react';

function ButtonGroup({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: '20px' }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry()}>Ok</Button>
    </Button.Group>
  )
}

export default ButtonGroup

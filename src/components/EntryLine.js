import { Grid, Segment, Icon } from 'semantic-ui-react';

function EntryLine({ id, description, value, isExpense = false, deleteEntry, editEntry }) {
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='left'>
          <Grid.Row>
            <Grid.Column width={10}>
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              {value}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered onClick={() => editEntry(id)} />
              <Icon name='trash' bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default EntryLine

import { Grid, Segment, Icon } from 'semantic-ui-react';

function EntryLine({ description, value, isExpense = false }) {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3} textAligne='right'>
        <Grid.Row>
          <Grid.Column width={10}>
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign='left'>
            {value}
          </Grid.Column>
          <Grid.Column width={3} textAlign='left'>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default EntryLine

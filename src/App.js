import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as='h1'>
        Budget
      </Header>
      <Statistic size='small'>
        <Statistic.Label>
          Your Balance:
        </Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign: 'left'}}>Income</Statistic.Label>
                <Statistic.Value>1,000.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{ textAlign: 'left' }}>Expenses</Statistic.Label>
                <Statistic.Value>1,200.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAligne='right'>
          <Grid.Row>
            <Grid.Column width={10}>Expense</Grid.Column>
            <Grid.Column width={3} textAlign='left'>$10.00</Grid.Column>
            <Grid.Column width={3} textAlign='left'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAligne='right'>
          <Grid.Row>
            <Grid.Column width={10}>Income</Grid.Column>
            <Grid.Column width={3} textAlign='left'>$100.00</Grid.Column>
            <Grid.Column width={3} textAlign='left'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAligne='right'>
          <Grid.Row>
            <Grid.Column width={10}>Expense</Grid.Column>
            <Grid.Column width={3} textAlign='left'>$10.00</Grid.Column>
            <Grid.Column width={3} textAlign='left'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>Add new transaction</Header>
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
        <Button.Group style={{marginTop: '20px'}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;

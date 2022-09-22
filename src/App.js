import Star from './components/assets/icon-star.svg'
import { Button } from './components/button/button';
import { Card, Description, Title } from './components/card/card';
import { Container } from './components/container';
import { ListConstainer, ListItem } from './components/icon/icon';

function App() {
  fetch()
  return (
    <>
      <Container>
        <Card>
          <ListItem>
            <img src={Star} alt="" />
          </ListItem>
          <Title>How did we do?</Title>
          <Description>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Description>
          <ListConstainer>
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
            <ListItem>4</ListItem>
            <ListItem>5</ListItem>
          </ListConstainer>
          <Button>SUBMIT</Button>
        </Card>
      </Container>
    </>
  );
}

export default App;

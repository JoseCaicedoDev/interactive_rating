import styled from 'styled-components';

const ListConstainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content:center;
  gap: 1.2rem;
  padding: 0;
  margin: 1.5rem 0;
`
const ListItem = styled.li`
  background: ${props => props.select ? 'var(--Medium-Grey)' : 'var(--Dark-Blue)' } ;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${props => props.select ? 'var(--White)' : 'var(--Medium-Grey)' };
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 700;
  :hover{
    background: var(--Orange);
    color: var(--White);
  }
`

export { ListConstainer, ListItem }
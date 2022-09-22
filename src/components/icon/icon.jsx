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
  background: var(--Dark-Blue);
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--Medium-Grey);
  font-size: 1.2rem;
  font-weight: 700;
  :hover{
    background: var(--Orange);
    color: var(--White);
  }
`

export { ListConstainer, ListItem }



/* export function ListOption(){
  return(
    <>
      <ul className='card__list'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </>
  )
} */
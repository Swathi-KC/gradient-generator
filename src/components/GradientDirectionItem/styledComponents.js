// Style your elements here
import styled from 'styled-components'

export const DirectionItemContainer = styled.li`
  width: 50%;
`
export const DirectionButton = styled.button`
  padding: 5px;
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  color: #334155;
  height: 30px;
  margin: 10px;
  height: 30px;
  width: 60px;
  max-width: 70px;
`

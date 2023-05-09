// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: ${props =>
    `linear-gradient(to ${props.direction},${props.colorOne}, ${props.colorTwo})`};
`

export const Heading = styled.h1`
  color: #fffff9;
  font-size: 26px;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
`

export const DirectionHeading = styled.p`
  color: #fffff9;
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  line-height: 1;
`

export const DirectionContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PickColorsHeading = styled.p`
  color: #ededed;
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  line-height: 1;
`
export const ColorPickerCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const ColorName = styled.p`
  color: #ededed;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 1;
  margin: 15px;
`

export const ColorPickerInput = styled.input`
  border: none;
  height: 35px;
  width: 100px;
  max-width: 120px;
  cursor: pointer;
  margin: 10px;
  border-radius: 4px;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  padding: 5px;
  background-color: #00c9b7;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  color: #1e293b;
  height: 30px;
  height: 30px;
  width: 90px;
  font-weight: 600;
  max-width: 100px;
`

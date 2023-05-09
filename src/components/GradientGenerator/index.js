import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  DirectionHeading,
  DirectionContainer,
  PickColorsHeading,
  ColorPickerCont,
  ColorName,
  ColorPickerInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeId: gradientDirectionsList[0].directionId,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    colorOneInput: '#8ae323',
    colorTwoInput: '#014f7b',
    activeDirectionValue: gradientDirectionsList[0].value,
    activeDirectionValueSelected: 'top',
  }

  changeDirection = directionId => {
    const activeValueItem = gradientDirectionsList.filter(
      eachDirection => eachDirection.directionId === directionId,
    )
    const activeValue = activeValueItem[0].value
    this.setState({activeId: directionId, activeDirectionValue: activeValue})
  }

  onChangeColorOne = event => {
    this.setState({colorOneInput: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwoInput: event.target.value})
  }

  onClickGenerateBtn = () => {
    const {
      activeId,
      activeDirectionValue,
      colorOneInput,
      colorTwoInput,
    } = this.state

    this.setState({
      activeId,
      colorOne: colorOneInput,
      colorTwo: colorTwoInput,
      activeDirectionValueSelected: activeDirectionValue,
    })
  }

  render() {
    const {
      activeId,
      colorOne,
      colorOneInput,
      colorTwoInput,
      colorTwo,
      activeDirectionValueSelected,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        direction={activeDirectionValueSelected}
        colorOne={colorOne}
        colorTwo={colorTwo}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionHeading>Choose Direction</DirectionHeading>
        <DirectionContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              directionDetails={eachDirection}
              key={eachDirection.directionId}
              onChangeDirection={this.changeDirection}
              isActive={eachDirection.directionId === activeId}
            />
          ))}
        </DirectionContainer>
        <PickColorsHeading>Pick the Colors</PickColorsHeading>
        <ColorPickerCont>
          <ColorName>{colorOne}</ColorName>
          <ColorName>{colorTwo}</ColorName>
        </ColorPickerCont>
        <ColorPickerCont>
          <ColorPickerInput
            type="color"
            value={colorOneInput}
            onChange={this.onChangeColorOne}
          />
          <ColorPickerInput
            type="color"
            value={colorTwoInput}
            onChange={this.onChangeColorTwo}
          />
        </ColorPickerCont>
        <GenerateButton type="button" onClick={this.onClickGenerateBtn}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator

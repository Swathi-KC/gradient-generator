// Write your code here
import {DirectionItemContainer, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, onChangeDirection} = props
  const {directionId, value, displayText} = directionDetails
  const onClickDirectionBtn = () => {
    onChangeDirection(directionId)
  }
  return (
    <DirectionItemContainer>
      <DirectionButton
        type="button"
        directionValue={value}
        isActive={isActive}
        onClick={onClickDirectionBtn}
      >
        {displayText}
      </DirectionButton>
    </DirectionItemContainer>
  )
}

export default GradientDirectionItem

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import theme from './theme'
import Icon from './Icon'
import Text from './Text'

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.number
}

const Radio = props => {
  const { checked, disabled, size } = props

  const radioIconName = checked ? 'radioChecked' : 'radioEmpty'

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
      <RadioIcon name={radioIconName} size={size} />
    </RadioWrap>
  )
}

const RadioWrap = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.borderGray};
  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${props.theme.colors.green};`};
  }
`

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  &:focus {
    box-shadow: none;
  }
  &:checked ~ svg {
    color: ${props => props.theme.colors.blue};
  }
  &:disabled ~ svg {
    color: ${props => props.theme.colors.borderGray};
  }
`

const RadioIcon = styled(Icon)`
  vertical-align: middle;
`

Radio.propTypes = propTypes
Radio.defaultProps = {
  theme: theme,
  size: 24
}

export default Radio

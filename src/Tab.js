import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize } from 'styled-system'
import theme from './theme'

const Tab = styled.button`
  ${props =>
    props.active
      ? `
  outline: none;
  padding: 8px;
  border: 2px solid ${props.theme.colors.black06};
  border-radius: 2px;
  color: ${props.theme.colors.green};
  border-top: 2px solid ${props.theme.colors.green};
  border-left: 1px solid ${props.theme.colors.black06};
  border-right: 1px solid ${props.theme.colors.black06};
  ${fontSize}
  `
      : `
  outline: none;
  background-color: whitesmoke;
  padding: 8px;
  border: 2px solid ${props.theme.colors.black06};
  border-radius: 2px;
  border-left: 0px solid;
  ${fontSize}
  `};
`

Tab.displayName = 'Tab'

Tab.propTypes = {
  color: PropTypes.string,
  active: PropTypes.bool
}

Tab.defaultProps = {
  color: 'green',
  theme: theme,
  active: false
}

export default Tab

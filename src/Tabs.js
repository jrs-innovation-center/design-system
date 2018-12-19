import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

class Tabs extends React.Component {
  state = {
    activeTab: 0
  }
  static propTypes = {
    onChangeTab: PropTypes.func
  }
  static defaultProps = {
    onChangeTab: () => null
  }

  componentDidMount() {
    React.Children.map(this.props.children, (c, i) => {
      if (c.props.active) {
        this.setState({ activeTab: i })
        this.props.onChangeTab(i)
      }
    })
  }

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this.state.activeTab === i,
        onClick: () => {
          this.setState({ activeTab: i })
          this.props.onChangeTab(i)
        }
      })
    })
    return <div>{children}</div>
  }
}

export default Tabs

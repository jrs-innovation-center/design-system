import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library'

import { Absolute } from '..'
//import { Absolute, Flag, Icon, Text } from '..'
import 'jest-dom/extend-expect'
import 'jest-styled-components'

afterEach(cleanup)

describe('Absolute', () => {
  test('renders with top, left and zIndex props', () => {
    const { container, debug } = render(
      <Absolute top={10} left={0} zIndex={2} />
    )
    debug()
    expect(container.firstChild).toMatchSnapshot()

    //expect(container.firstChild).toHaveStyleRule('position', 'absolute')
    //expect(container.firstChild).toHaveStyleRule('top', '10px')
    // expect(container).toHaveStyleRule('left', '0px')
    // expect(container).toHaveStyleRule('z-index', '2')
  })

  test('renders with flag and Child', () => {
    const { container } = render(
      <Absolute top={10} left={0}>
        <Flag>
          <Icon name="coupon" /> <Text.span>EXCLUSIVE</Text.span>
        </Flag>
      </Absolute>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Tab } from '../src'

storiesOf('Tab', module).add(
  'Default Tab',
  withInfo({
    inline: true,
    text: 'Use the <Tab /> '
  })(() => (
    <div>
      <Tab active>Features</Tab>
      <Tab>Features</Tab>
      <Tab>Features</Tab>
      <Tab>Features</Tab>
    </div>
  ))
)

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Tabs, Tab } from '../src'

storiesOf('Tabs', module).add(
  'Default Tabs',
  withInfo({
    inline: true,
    text: 'Use the <Tabs /> '
  })(() => (
    <Tabs onChangeTab={i => console.log('active tab is ', i)}>
      <Tab>Features</Tab>
      <Tab active>Features</Tab>
      <Tab>Features</Tab>
      <Tab>Features</Tab>
    </Tabs>
  ))
)

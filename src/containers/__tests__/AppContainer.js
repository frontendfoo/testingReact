// Test Renderer
import TestRenderer from 'react-test-renderer'

// React
import React from 'react'

// Container & Component
import AppContainer from '../AppContainer'
import App from '../../components/App'

jest.mock('../../hooks/useLoginForm', () => ({
  __esModule: true,
  default: () => ({
    handleSetName: jest.fn().mockName('handleSetName'),
    handleSubmit: jest.fn().mockName('handleSubmit'),
    name: 'Test Name',
    disabled: false,
  }),
}))

describe('The App Container Component', () => {
  it('should map the props to App component', () => {
    const { root } = TestRenderer.create(<AppContainer />)
    const props = root.findByType(App.type).props
    expect(props).toMatchSnapshot()
  })
})

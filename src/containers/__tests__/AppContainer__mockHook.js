// Test Renderer
import TestRenderer from 'react-test-renderer'

// React
import React from 'react'

// Container & Component
import AppContainer from '../AppContainer'
import App from '../../components/App'

jest.mock('../../components/App', () => ({
  __esModule: true,
  default: function mockComponent(props) {
    return <div {...props} />
  },
}))

jest.mock('../../hooks/useLoginForm')

describe('The App Container Component', () => {
  it('should map the props to App component', () => {
    const { root } = TestRenderer.create(<AppContainer />)
    const props = root.findByType(App).props
    expect(props).toMatchSnapshot()
  })
})

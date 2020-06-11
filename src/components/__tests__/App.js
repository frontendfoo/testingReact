// React
import React from 'react'

// Test Renderer
import ShallowRenderer from 'react-test-renderer/shallow'

// Component
import App from '../App'

const renderer = new ShallowRenderer()

describe('The App Component', () => {
  const propVariations = [
    {},
    {
      handleSetName: '',
      name: '',
      disabled: false,
      handleSubmitName: ''
    },
    {
      handleSetName: 'Function setName',
      name: 'Test Name',
      disabled: true,
      handleSubmitName: 'Function submitName'
    }
  ]

  propVariations.forEach((props, i) => {
    const result = renderer.render(<App {...props} />)
    it(`match snapshot with prop variation ${++i}`, () => {
      expect(result).toMatchSnapshot()
    })
  })
})

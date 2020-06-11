import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from '../containers/AppContainer'
import { Provider } from 'store'

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    div.id = 'root'

    document.body.appendChild(div)

    require('../index')

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider>
        <AppContainer />
      </Provider>,
      div
    )
  })
})

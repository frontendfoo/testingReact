import React from 'react'
import App from '../components/App'

// Custom Hooks
import useLoginForm from '../hooks/useLoginForm'

const AppContainer = () => {
  const { handleSetName, name, disabled, handleSubmit } = useLoginForm()

  const appProps = {
    handleSetName,
    name,
    disabled,
    handleSubmit,
  }

  return <App {...appProps} />
}
export default AppContainer

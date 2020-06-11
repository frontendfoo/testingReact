import React, { memo } from 'react'

const App = ({ handleSetName, name, disabled, handleSubmitName }) => (
  <div>
    <h1>login</h1>
    <input
      type='text'
      className='w-full mt-8'
      placeholder='Enter your name here...'
      onChange={handleSetName}
      value={name}
    />
    <div>
      <button className='mt-12' disabled={disabled} onClick={handleSubmitName}>
        Login!
      </button>
    </div>
  </div>
)
export default memo(App)

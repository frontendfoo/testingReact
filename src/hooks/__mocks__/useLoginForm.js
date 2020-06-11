const useLoginForm = jest.fn(() => ({
  handleSetName: jest.fn().mockName('handleSetName'),
  handleSubmit: jest.fn().mockName('handleSubmit'),
  name: 'Test Name',
  disabled: false,
}))

export default useLoginForm

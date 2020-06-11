import useLoginForm from '../useLoginForm'
import { renderHook, act } from '@testing-library/react-hooks'
import { useStore } from 'store'

jest.mock('store')

describe('The useLoginForm hook', () => {
  it('should have a name Prop thats mapped from the store - ""', () => {
    const { result } = renderHook(() => useLoginForm())
    expect(result.current.name).toEqual('')
  })

  it('should have a name Prop thats mapped from the store - "Test Name"', () => {
    useStore.mockReturnValueOnce({
      state: {
        form: {
          login: {
            name: 'Test Name',
          },
        },
      },
    })

    const { result } = renderHook(() => useLoginForm())
    expect(result.current.name).toEqual('Test Name')
  })

  it('should have a computed disabled prop - true', () => {
    const { result } = renderHook(() => useLoginForm())
    expect(result.current.disabled).toEqual(true)
  })

  it('should have a computed disabled prop - false', () => {
    useStore.mockReturnValueOnce({
      state: {
        form: {
          login: {
            name: 'Test Name',
          },
        },
      },
    })

    const { result } = renderHook(() => useLoginForm())
    expect(result.current.disabled).toEqual(false)
  })

  it('should have a prop setName that calls setState', () => {
    const mockStore = useStore()
    useStore.mockReturnValueOnce({
      ...mockStore,
    })

    const { result } = renderHook(() => useLoginForm())
    result.current.setName('New Name')

    expect(mockStore.setState).toHaveBeenCalledTimes(1)
    expect(mockStore.setState).toHaveReturnedWith({
      form: { login: { name: 'New Name' } },
    })
  })

  it('should have a prop handleSetName that calls setState', () => {
    const mockStore = useStore()
    useStore.mockReturnValueOnce({
      ...mockStore,
    })

    const { result } = renderHook(() => useLoginForm())
    result.current.handleSetName({ target: { value: 'New Name 2' } })

    expect(mockStore.setState).toHaveBeenCalledTimes(1)
    expect(mockStore.setState).toHaveReturnedWith({
      form: { login: { name: 'New Name 2' } },
    })
  })
})

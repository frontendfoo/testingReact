// React
import { useMemo, useCallback } from 'react'

// Store
import { useStore } from 'store'

// Immer
import produce from 'immer'

const useLoginForm = () => {
  const { state, setState } = useStore()

  const name = useMemo(() => state.form.login.name, [state.form.login.name])

  const disabled = useMemo(() => !name, [name])

  const setName = useCallback(
    (name) =>
      setState(
        produce((draft) => {
          draft.form.login.name = name
        })
      ),
    [setState]
  )

  const handleSetName = useCallback((e) => setName(e.target.value), [setName])

  return {
    name,
    setName,
    disabled,
    handleSetName,
  }
}
export default useLoginForm

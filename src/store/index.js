import makeStore from '@thefrontend/contextstore'

const state = {
  form: {
    login: {
      name: '',
    },
  },
}

export const { Provider, useStore } = makeStore(state)

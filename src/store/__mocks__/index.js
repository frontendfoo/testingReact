const state = {
  form: {
    login: {
      name: '',
    },
  },
}

export const useStore = jest.fn(() => ({
  state,
  setState: jest.fn((fn) => fn(state)),
}))

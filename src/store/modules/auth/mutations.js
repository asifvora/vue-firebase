export default {
    setLoader: (state, isLoading) => state.isLoading = isLoading,

    setUser: (state, payload) => state.user = payload,

    setIsAuthenticated: (state, payload) => state.isAuthenticated = payload,

    setSingInError: (state, payload) => state.singInError = payload,

    setSingUpError: (state, payload) => state.singUpError = payload,
}
export default {
    setLoader: (state, isLoading) => state.isLoading = isLoading,

    setUser: (state, payload) => state.user = payload,

    setIsAuthenticated: (state, payload) => state.isAuthenticated = payload
}
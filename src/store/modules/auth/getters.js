export const isLoading = state => state.isLoading;

export const isAuthenticated = state => state.user !== null && state.user !== undefined;

export const currentUser = state => state;

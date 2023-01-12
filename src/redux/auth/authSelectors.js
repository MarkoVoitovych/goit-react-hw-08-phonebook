export const selectUserEmail = state => state.auth.user.email;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.isLoading;

export const selectUserToken = state => state.auth.token;

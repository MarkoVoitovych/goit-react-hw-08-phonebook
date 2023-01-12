import { createSelector } from '@reduxjs/toolkit';

export const selectUserEmail = state => state.auth.user.email;

export const selectUserToken = state => state.auth.token;

export const selectIsAuth = createSelector([selectUserToken], token =>
  Boolean(token)
);

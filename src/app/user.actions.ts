// src/app/user.actions.ts
import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[User] Set User', props<{ user: any }>());
export const clearUser = createAction('[User] Clear User');

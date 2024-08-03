// src/app/local-storage.metareducer.ts
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export function localStorageMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);

    if (typeof window !== 'undefined' && window.localStorage) {
      if (action.type === INIT || action.type === UPDATE) {
        const savedState = localStorage.getItem('state');
        return savedState ? JSON.parse(savedState) : nextState;
      }
      localStorage.setItem('state', JSON.stringify(nextState));
    }

    return nextState;
  };
}

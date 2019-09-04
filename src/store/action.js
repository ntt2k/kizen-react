import { SET_DISPLAY } from './actiontype';

export const setDisplay = (id) => ({
  type: SET_DISPLAY,
  payload: {
    id
  }
});

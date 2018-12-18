import { RSAA } from 'redux-api-middleware';

export const invoke = config => dispatch => {
  return new Promise(res => res()).then(() =>
    dispatch({
      [RSAA]: config,
    }).then(action => {
      // handle error
    })
  );
};

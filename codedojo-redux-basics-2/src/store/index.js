import { createStore } from 'redux';

import reducer from '../reducers';

const store = createStore(reducer);
const dispatch = store.dispatch;

function addPromiseSupport(store) {
  const dispatch = store.dispatch;

  return (store.dispatch = action => {
    if (typeof action.then === 'function') {
      return action.then(dispatch);
    }

    return dispatch(action);
  });
}

function addThunkSupport(store) {
  const dispatch = store.dispatch;

  return (store.dispatch = action => {
    if (typeof action === 'function') {
      return action(dispatch);
    }

    return dispatch(action);
  });
}

store.dispatch = addThunkSupport(store);

export default store;

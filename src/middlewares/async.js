export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload does not have a .then property
    // we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
     // Make sure the actions' promise resolves
     action.payload
      .then((response) => {
        // crate a new action the old type, but
        // replace the promise the response data
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  };
}

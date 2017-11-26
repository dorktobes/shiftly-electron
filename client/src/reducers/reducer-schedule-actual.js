const scheduleActual = (state = null, action) => {
	switch(action.type) {
    case 'GET_ACTUAL_SCHEDULE':
      return state ? state.concat(action.payload.data) : action.payload.data;
    case 'GET_ALL':
      return action.payload.data.scheduleActual || state;
    case 'REMOVE_LOGGED_IN_DETAILS':
      return null;
    default:
      return state;
  }
};

export default scheduleActual;
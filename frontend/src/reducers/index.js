const reducer = (state, action) => {

  switch (action.type) {
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;

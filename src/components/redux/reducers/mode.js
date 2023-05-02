export const modeReducer = (state = true, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return action.payload;
    default:
      return state;
  }
};

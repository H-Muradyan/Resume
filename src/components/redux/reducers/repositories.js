export const repositoriesReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_REPOSITORIES":
        return action.payload;
      default:
        return state;
    }
  };
  
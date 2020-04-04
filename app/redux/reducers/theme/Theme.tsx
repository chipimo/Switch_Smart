
const Theme = (
  state = {
    theme: "light"
  },
  action
) => {
  switch (action.type) {
    case "setTheme":
      state = {
        ...state,
        theme: action.setTheme
      };
      break;
    case "resetTheme":
      state = {
        ...state,
        theme: "light"
      };
      break;

    default:
      return state;
  }

  return state;
};

export default Theme;

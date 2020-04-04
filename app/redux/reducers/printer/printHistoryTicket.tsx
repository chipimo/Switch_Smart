const TicketToPrint = (
  state = {
    active: false
  },
  action
) => {
  switch (action.type) {
    case "PRINTHISTORY":
      state = {
        ...state,
        active: true
      };
      break;
    case "CLEARPRINT":
      state = {
        ...state,
        active: false
      };
      break;

    default:
      return state;
  }

  return state;
};

export default TicketToPrint;

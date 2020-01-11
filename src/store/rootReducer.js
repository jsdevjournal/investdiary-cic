export default (
  state = {
    initialDeposit: "0",
    regularDeposit: "0",
    depositFrequency: "monthly",
    compoundFrequency: "monthly",
    years: "10",
    interest: "5"
  },
  action
) => {
  switch (action.type) {
    case "update":
      return action.payload;
    default:
      return state;
  }
};

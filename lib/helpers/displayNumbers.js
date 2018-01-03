export const penniesToDollars = (integerAmount) => {
  let newAmount = 0;
  newAmount = (integerAmount / 100);
  return '$ ' + (Math.round(newAmount * 100) / 100).toFixed(2);
};

export const dollarsToPennies = (amountString) => {
  let newAmount = Number(amountString);
  newAmount = Math.round(newAmount * 100);
  return parseInt(newAmount);
};

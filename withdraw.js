//step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //step-7(value near por clear korte hobe  )
  withdrawField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number");
    return;
  }
  //step3
  const withdrawTotalElement = document.getElementById("withdraw-balance");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step-5
  const balanceTotalElement = document.getElementById("fynal-balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("amount nai");
    return;
  }
  //step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step-6
  const newTotalBalance = previousBalanceTotal - currentWithdrawTotal;
  // set the balane total
  balanceTotalElement.innerText = newTotalBalance;
});

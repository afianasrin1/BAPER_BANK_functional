//  step-1: add event listener  ba click handler tothe diposit button

document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log("plese clicked");
  //step2: get the deposite amount from the deposite input field
  // always  remember to use .value to get text from an input field

  const depositField = document.getElementById("deposit-field");

  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //   console.log(newDepositAmount);
  //step-3:get the current deposit total
  //for non input(element other than input,textarea)use innerText to get the text

  const depositTotalElement = document.getElementById("deposit-balance");
  const previousdepositTotalString = depositTotalElement.innerText;
  const previousdepositTotal = parseFloat(previousdepositTotalString);

  // console.log(depositTotal);
  //step-4: add numbers to set the total deposit

  const currentDepositTotal = previousdepositTotal + newDepositAmount;
  //set the deposite total
  depositTotalElement.innerText = currentDepositTotal;

  //step-5: get ballance current total

  const balanceTotalElement = document.getElementById("fynal-balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //calculate current total balance
  const currentTotalBalance = previousBalanceTotal + currentDepositTotal;
  // set the balane total
  balanceTotalElement.innerText = currentTotalBalance;
  // console.log(currentTotalBalance);
  //step-7: clear the deposit field

  depositField.value = "";
});

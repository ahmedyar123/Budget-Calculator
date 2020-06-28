class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //submit budget form
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value < 0 || value === "") {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML =
        "<p> Value cannot be empty or negative </p>";
      const self = this;
      setTimeout(function () {
        self.budgetFeedback.classList.remove("showItem");
      }, 3000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }
  //Show Balance
  showBalance() {
    console.log("hey! What's up?");
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if (total > 0) {
      this.balanceAmount.classList.remove("showRed", "showBlack");
      this.balanceAmount.classList.add("showGreen");
    } else if (total < 0) {
      this.balanceAmount.classList.remove("showGreen", "showBlack");
      this.balanceAmount.classList.add("showRed");
    } else if (total === 0) {
      this.balanceAmount.classList.remove("showGreen", "showRed");
      this.balanceAmount.classList.add("showBlack");
    }
  }
  //submit expense form
  submitExpenseForm() {
    const expenseValue = this.expenseAmount.value;
    const amountValue = this.expenseAmount.value;
    if (expenseValue ) {
      
    }
  }
  //total expense
  totalExpense() {
    let total = 400;
    return total;
  }
}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  //New instance of UI class

  const ui = new UI();

  //budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  //expense form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitExpenseForm();
  });

  //expense list click
  budgetForm.addEventListener("click", function () {});
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});

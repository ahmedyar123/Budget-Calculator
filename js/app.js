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
  submitBudgetForm (){
    console.log('hello world!')
    const value = this.budgetInput.value;
    if (value < 0 || value === "") {
      this.budgetFeedback.classList.add("showItem");
      
    }
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
  });

  //expense list click
  budgetForm.addEventListener("click", function () {});
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
}); 

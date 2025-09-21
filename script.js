const user_name = document.querySelector("#name");
const loginbtn = document.querySelector("#login");
const hiiden = document.querySelector(".hiiden");
const print_name = document.querySelector(".hiiden h1");

const incomeInput = document.querySelector("#income");
const expensesInput = document.querySelector("#expenses");
const amountInput = document.querySelector("#amount");
const submitbtn = document.querySelector("#Submit");

const expenseList = document.createElement("ul");
hiiden.appendChild(expenseList);

const totalIncomeSpan = document.querySelector("#total-income");
const totalExpensesSpan = document.querySelector("#total-expenses");
const balanceSpan = document.querySelector("#balance");

let totalIncome = 0;
let totalExpenses = 0;

loginbtn.addEventListener("click", () => {
    if(user_name.value.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    print_name.innerText = `Hii ${user_name.value}`;
    hiiden.classList.remove("hidden");
})

submitbtn.addEventListener("click", () => {
    const incomeValue = parseFloat(incomeInput.value);
    const expenseName = expensesInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value);

    if(isNaN(incomeValue) || incomeValue < 0) {
        alert("Enter valid income!");
        return;
    }

    if(expenseName === "" || isNaN(expenseAmount) || expenseAmount < 0) {
        alert("Enter valid expense name and amount!");
        return;
    }


    totalIncome = incomeValue;
    totalExpenses += expenseAmount;
    const balance = totalIncome - totalExpenses;

    totalIncomeSpan.innerText = totalIncome.toFixed(2);
    totalExpensesSpan.innerText = totalExpenses.toFixed(2);
    balanceSpan.innerText = balance.toFixed(2);

    const li = document.createElement("li");
    li.textContent = `${expenseName} : ₹${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(li);

    expensesInput.value = "";
    amountInput.value = "";
})

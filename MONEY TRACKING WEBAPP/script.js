let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementaryById('category-select')
const amountInput= document.getElementaryById('amount-input')
const dateInput = document.getElementaryById('date-Input')
const addbtn = document.getElementaryById('add-btn')
const expenseTableBody = document.getElementaryById('expense-table-body')
const totalAmountCell = document.getElementaryById('total-amount')

addbtn.addEventListener('Click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.Value);
    const date = dateInput.value;
    
    if(category === ''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('please enter a valid amount');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,date})

    totalAmount += amount;
    totalAmountCell.textContent=totalamount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textcontent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splioce(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContext = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expense.lenght - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expexse.date;
    deleteCell.appendChild(deleteBtn)

})
for(const exepense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent=totalamount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
 
    const deleteBtn = document.createElement('button');

    deleteBtn.textcontent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splioce(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContext = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expense.lenght - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expexse.date;
    deleteCell.appendChild(deleteBtn)

}
let total = 0;

const form = document.getElementById("expense-form"); //gets elements by their ID - this is the id for the form <form id="expense-form"
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

form.addEventListener("submit" , function(e) { //Looks for when the submit button is clicked, then it saves as a event, e. 
e.preventDefault(); //stops page from refreshing and losing data 


//the .value here gets the value of the input from the user 
let title = titleInput.value;
title = title.toUpperCase();

const amount = amountInput.value;

let category = categoryInput.value;
category = category.toUpperCase();

const rawDate = dateInput.value;
const formattedDate = new Date(rawDate).toLocaleDateString("en-GB");

console.log(title, amount, category, formattedDate);

//gets the entire list, creates a empty list, adds the text from the submitted form onto this list.
const li = document.createElement("li")

li.textContent = title + " - £" + amount + " - " + category + " - " + formattedDate + " ";

//delete button
const del = document.createElement("button");
del.textContent = "Delete";

// button listens for a click
del.addEventListener("click", function() {
    const amountNumber = parseFloat(amount)
    total = total - amountNumber;

    totalDisplay.textContent =
      "Total: £" + total.toFixed(2);

    li.remove(); //removes from list
});

//edit button
const edit = document.createElement("button");
edit.textContent = "Edit";

edit.addEventListener("click", function () {
    titleInput.value = title;
    amountInput.value = amount;
    categoryInput.value = category;
    dateInput.value = rawDate;
    const amountNumber = parseFloat(amount);
    total = total - amountNumber;

    totalDisplay.textContent = "Total: £" + total.toFixed(2);

    li.remove();
});

// FIX: attach button to li
li.appendChild(del);
li.appendChild(edit);
expenseList.appendChild(li);

//show the total. Use parseFloat to convert the amount which is originally a string into an actual number 
const amountNumber = parseFloat(amount);
total = total + amountNumber; //as total was set to 0 it will be 0 + amount = total

totalDisplay.textContent = "Total: £" + total.toFixed(2);

form.reset()

});
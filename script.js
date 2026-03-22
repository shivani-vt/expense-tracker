const form = document.getElementById("expense-form"); //gets elements by their ID - this is the id for the form <form id="expense-form"

form.addEventListener("submit" , function(e) { //Looks for when the submit button is clicked, then it saves as a event, e. 
e.preventDefault(); //stops page from refreshing and losing data 

const title = document.getElementById("title").value ; //the .value here gets the value of the input from the user 
const amount = document.getElementById("amount").value;
const category = document.getElementById("category").value;
const date = document.getElementById("date").value;

console.log(title, amount, category, date);


//gets the entire list, creates a empty list, adds the text from the submitted form onto this list.
const expenseList = document.getElementById("expense-list");
const li = document.createElement("li")
li.textContent = title + " - £" + amount + " - " + category + " - " + date;
expenseList.appendChild(li); //attaches onto list

}); 
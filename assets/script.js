// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var projectFormEl = $("#project-form");
var projectNameInputEl = $("#project-name-input");
var projectTypeInputEl = $("#project-type-input");
var hourlyRateInputEl = $("#hourly-rate-input");
var dueDateInputEl = $("#due-date-input");

// TODO: function to display the time in the jumbotron and update every second
function displayTime() {
   var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
   $("#time-display").text(rightNow);
}

displayTime();

// TODO: create table elements and update the elements using the function parameters and append all elements to the projectDisplayEl.
// TODO: also hide the modal during this function call which is done via an event listener after collecting the parameter form data
function printProjectData(name, type, hourlyRate, dueDate) {}

// TODO: calculate the daily total by multiplying by 8hrs and figure out the total by multiplying by how many days
// TODO: this function is fired in the printProjectData() function so you can see the total earnings in the table
function calculateTotalEarnings(rate, days) {}

// TODO: use event delegation and DOM traversal to find the parent table row to delete when you click on the remove (X) button
function handleDeleteProject(event) {}

// handle project form submission
// TODO: fire this function when you submit the form in the modal (event listener) 
// TODO: collect the form input values and fire the printProjectData() function and pass the input values as function arguments
function handleProjectFormSubmit(event) {}

// TODO: create an on submit event listener for clicking the form submit in the modal

// TODO: create an on click event listener using event delegation to delete a project on the remove (X) button

// TODO: create a jQuery UI Datepicker and attach it to the due date form input.

// TODO: create your interval to display the time in the jumbotron and have it fire every second.
setInterval(displayTime, 1000);


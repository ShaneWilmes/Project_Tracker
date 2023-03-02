// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var projectFormEl = $("#project-form");
var projectNameInputEl = $("#project-name-input");
var projectTypeInputEl = $("#project-type-input");
var hourlyRateInputEl = $("#hourly-rate-input");
var dueDateInputEl = $("#due-date-input");

// TODO: Write a function to display the time in the jumbotron and update every second
function displayTime() {
   var thisMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
   $("#time-display").text(thisMoment);  // Or timeDisplayEl.text(thisMoment);
}

// TODO: Create table elements and update the elements using the function parameters and append all elements to the projectDisplayEl.
// TODO: Hide the modal during this function call which is done via an event listener after collecting the parameter form data
function printProjectData(name, type, hourlyRate, dueDate) {
    var projectRowEl = $('<tr>');

    var projectNameTdEl = $('<td>').addClass('p-2').text(name);

    var projectTypeTdEl = $('<td>').addClass('p-2').text(type);

    var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

    var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

    var daysUntilDue = moment(dueDate, 'MM/DD/YYYY').diff(daysUntilDue, 'days');

    var daysLeft =$('<td>').addClass('p-2').text(daysUntilDue);

    var totalEarnings = calculateTotalEarnings(hourlyRate, daysUntilDue);
    
    var totalTdEl = $('<td>').addClass('p-2').text("$" + totalEarnings);

    projectRowEl.append(projectNameTdEl, projectTypeTdEl, rateTdEl, dueDateTdEl, daysLeft, totalTdEl);  // Appends the list together

    projectDisplayEl.append(projectRowEl);  // Appends the list to the dom

    projectModalEl.modal('hide');
}

// TODO: calculate the daily total by multiplying by 8hrs and figure out the total by multiplying by how many days
// TODO: this function is fired in the printProjectData() function so you can see the total earnings in the table
function calculateTotalEarnings(rate, days) {
    var dailyTotal = rate * 8;
    var total = dailyTotal * days;
    var totalFor = Intl.NumberFormat('en-US')
    var newTotal = totalFor.format(total);
    return newTotal;
}

// TODO: use event delegation and DOM traversal to find the parent table row to delete when you click on the remove (X) button
function handleDeleteProject(event) {}

// Handle project form submission
// TODO: fire this function when you submit the form in the modal (event listener) 
// TODO: collect the form input values and fire the printProjectData() function and pass the input values as function arguments
function handleProjectFormSubmit(event) {
    event.preventDefault();

    var projectName = projectNameInputEl.val().trim();
    var projectType = projectTypeInputEl.val().trim();
    var hourlyRate = hourlyRateInputEl.val().trim();
    var dueDate = dueDateInputEl.val().trim();

    printProjectData(projectName, projectType, hourlyRate, dueDate);
    projectFormEl[0].reset();  // Clears form inputs
}

// TODO: create an on submit event listener for clicking the form submit in the modal
projectFormEl.on("submit", handleProjectFormSubmit)

// TODO: create an on click event listener using event delegation to delete a project on the remove (X) button


// TODO: create a jQuery UI Datepicker and attach it to the due date form input.

// TODO: create your interval to display the time in the jumbotron and have it fire every second.
setInterval(displayTime, 1000);


// Load existing data from localStorage or start with empty array
let volunteerData = JSON.parse(localStorage.getItem("volunteerData"));


// This runs when the page finishes loading
window.addEventListener("DOMContentLoaded", function () {
    // Getting the form from HTML
    const form = document.getElementById("volunteer-form");

    // When the form is submitted, run the handleSubmit function
    form.addEventListener("submit", handleSubmit);
});

// This function handles everything when the form is submitted
function handleSubmit(event) {
    event.preventDefault(); // stops the page from refreshing
   
    
    // Getting values from the input fields (matching HTML IDs)
    let charityName = document.getElementById("charity-name").value.trim();
    let hours = document.getElementById("hours-volunteered").value.trim();
    let date = document.getElementById("volunteer-date").value;
    let rating = document.getElementById("experience-rating").value.trim();
    
    // Remove old error messages
    clearErrors();

    // A variable to track if the form is valid
    let isValid = true;

    // Checking if charity name is empty
    if (charityName === "") {
        showError("charity-name", "Charity Name is required.");
        isValid = false;
    }

    // Checking if hours is empty, not a number, or less than 1
    // (based on course notes numeric validation)
    if (hours === "" || hours <= 0) {
        showError("hours-volunteered", "Hours must be a positive number.");
        isValid = false;
    }

    // Checking if date is selected
    if (date === "") {
        showError("volunteer-date", "Date is required.");
        isValid = false;
    }

    // Checking if rating is valid (1 to 5)
    if (rating === "" ||rating < 1 || rating > 5) {
        showError("experience-rating", "Rating must be between 1 and 5.");
        isValid = false;
    }

    // If any validation failed, stop the function
    if (!isValid) return;

    // Making an object to store the entry (assignment requirement)
    let newEntry = {
        charityName: charityName,
        hours: Number(hours),
        date: date,
        rating: Number(rating)
    };

    // Adding the entry to our array
    volunteerData.push(newEntry);

    // Updating the list shown on the page
    updateDisplay();

    // Clear the form after submitting
    event.target.reset();
}

// This function shows an error message below the form
function showError(id, message) {
    const errorBox = document.getElementById("form-errors");

    let p = document.createElement("p");
    p.className = "error";
    p.style.color = "red";
    p.textContent = message;

    // Add the error message to the error box
    errorBox.appendChild(p);
}

// This removes all old error messages before new ones appear
function clearErrors() {
    document.getElementById("form-errors").innerHTML = "";
}

// This updates the list of volunteer entries on the page
function updateDisplay() {
    const tableBody = document.querySelector("#volunteer-table tbody");
    tableBody.innerHTML = ""; // Clear old rows

     let totalHours = 0;
    
     // Loop through all saved entries and display them
    volunteerData.forEach(entry => {
        // Calculate total hours
        totalHours += entry.hours;

         // Create a table row
        const row = document.createElement("tr");


        // Showing the details of each entry
        row.innerHTML = `
           <td>${entry.charityName}</td>
           <td>${entry.hours}</td>
           <td>${entry.date}</td>
           <td>${entry.rating}</td> 
            <td><button class="delete-btn">Delete</button></td>
        `;
          // Add the row to the table
        tableBody.appendChild(row);
        });

    // Add delete functionality after rows are added
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = this.getAttribute("data-index");
            volunteerData.splice(idx, 1); // remove from array
            // Save updated data to localStorage
            localStorage.setItem("volunteerData", JSON.stringify(volunteerData));
            updateDisplay(); // refresh table
        });
    });

    // Update total hours in the summary
    document.getElementById("total-hours").textContent = totalHours;
}

// Load existing data from localStorage or start with empty array
let volunteerData = JSON.parse(localStorage.getItem("volunteerData"));


// This runs when the page finishes loading
window.addEventListener("DOMContentLoaded", function () {
    // Getting the form from HTML
    const form = document.getElementById("volunteer-form");

    // When the form is submitted, run the handleSubmit function
    form.addEventListener("submit", handleSubmit);
});

// This function handles everything when the form is submitted
function handleSubmit(event) {
    event.preventDefault(); // stops the page from refreshing
   
    
    // Getting values from the input fields (matching HTML IDs)
    let charityName = document.getElementById("charity-name").value.trim();
    let hours = document.getElementById("hours-volunteered").value.trim();
    let date = document.getElementById("volunteer-date").value;
    let rating = document.getElementById("experience-rating").value.trim();
    


    // Remove old error messages
    clearErrors();

    // A variable to track if the form is valid
    let isValid = true;

    // Checking if charity name is empty
    if (charityName === "") {
        showError("charity-name", "Charity Name is required.");
        isValid = false;
    }

    // Checking if hours is empty, not a number, or less than 1
    // (based on course notes numeric validation)
    if (hours === "" || hours <= 0) {
        showError("hours-volunteered", "Hours must be a positive number.");
        isValid = false;
    }

    // Checking if date is selected
    if (date === "") {
        showError("volunteer-date", "Date is required.");
        isValid = false;
    }

    // Checking if rating is valid (1 to 5)
    if (rating === "" ||rating < 1 || rating > 5) {
        showError("experience-rating", "Rating must be between 1 and 5.");
        isValid = false;
    }

    // If any validation failed, stop the function
    if (!isValid) return;

    // Making an object to store the entry (assignment requirement)
    let newEntry = {
        charityName: charityName,
        hours: Number(hours),
        date: date,
        rating: Number(rating)
    };

    // Adding the entry to our array
    volunteerData.push(newEntry);

    // Updating the list shown on the page
    updateDisplay();

    // Clear the form after submitting
    event.target.reset();
}

// This function shows an error message below the form
function showError(id, message) {
    const errorBox = document.getElementById("form-errors");

    let p = document.createElement("p");
    p.className = "error";
    p.style.color = "red";
    p.textContent = message;

    // Add the error message to the error box
    errorBox.appendChild(p);
}

// This removes all old error messages before new ones appear
function clearErrors() {
    document.getElementById("form-errors").innerHTML = "";
}

// This updates the list of volunteer entries on the page
function updateDisplay() {
    const tableBody = document.querySelector("#volunteer-table tbody");
    tableBody.innerHTML = ""; // Clear old rows

     let totalHours = 0;
    
     // Loop through all saved entries and display them
    volunteerData.forEach(entry => {
        // Calculate total hours
        totalHours += entry.hours;

         // Create a table row
        const row = document.createElement("tr");


        // Showing the details of each entry
        row.innerHTML = `
           <td>${entry.charityName}</td>
           <td>${entry.hours}</td>
           <td>${entry.date}</td>
           <td>${entry.rating}</td> 
            <td><button class="delete-btn">Delete</button></td>
        `;
          // Add the row to the table
        tableBody.appendChild(row);
        });

    // Add delete functionality after rows are added
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = this.getAttribute("data-index");
            volunteerData.splice(idx, 1); // remove from array
            // Save updated data to localStorage
            localStorage.setItem("volunteerData", JSON.stringify(volunteerData));
            updateDisplay(); // refresh table
        });
    });

    // Update total hours in the summary
    document.getElementById("total-hours").textContent = totalHours;
}



let exercises = [
    { name: 'Push-ups', type: 'Strength Training' },
    { name: 'Running', type: 'Cardio' },
    { name: 'Yoga', type: 'Flexibility' },
];

let completedWorkouts = [];

// Function to display exercises
function displayExercises() {
    var exerciseListContainer = document.getElementById('exercise-list');

    // Clear previous content
    exerciseListContainer.innerHTML = '';

    // Display each exercise
    exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `<strong>${index + 1}. ${exercise.name}</strong> - ${exercise.type}`;
        exerciseListContainer.appendChild(exerciseDiv);
    });
}

// Function to add a new exercise
function addExercise() {
    var exerciseName = document.getElementById('exercise-name').value;
    var exerciseType = document.getElementById('exercise-type').value;

    // Validate input
    if (!exerciseName || !exerciseType) {
        alert('Please enter both exercise name and type.');
        return;
    }

    // Add the new exercise to the list
    const newExercise = { name: exerciseName, type: exerciseType };
    exercises.push(newExercise);

    // Display updated exercise list
    displayExercises();

    // Clear input fields
    document.getElementById('exercise-name').value = '';
    document.getElementById('exercise-type').value = '';
}

// Call the displayExercises function when the page loads
window.onload = displayExercises;

// Function to update user name
function updateUserName() {
    var userNameInput = document.getElementById('user-name');
   var displayNameElement = document.getElementById('display-name');
   var newName = userNameInput.value.trim();

    if (newName !== "") {
        // Update the displayed name
        displayNameElement.textContent = newName;
        // Clear the input field
        userNameInput.value = "";
    } else {
        alert("Please enter a valid name.");
    }
}


function updateUserAge() {
    const userAgeInput = document.getElementById('user-age');
    const userAgeElement = document.getElementById('display-age');

    const newAge = userAgeInput.value.trim();

    if (newAge !== "") {
        
        userAgeElement.textContent = newAge;
        
        userAgeInput.value = "";
    } else {
        alert("Please enter a valid age.");
    }
}

function updateUserWeight() {
    const userWeightInput = document.getElementById('user-weight');
    const userWeightElement = document.getElementById('display-weight');

    const newWeight = userWeightInput.value.trim();

    if (newWeight !== "") {
    
        userWeightElement.textContent = newWeight + " kg";
    
        userWeightInput.value = "";
    } else {
        alert("Please enter a valid weight.");
    }
}

// Function to display exercises using jQuery
function displayExercises() {
    const exerciseListContainer = $('#exercise-list');

    // Clear previous content
    exerciseListContainer.empty();

    // Display each exercise using jQuery
    exercises.forEach((exercise, index) => {
        const exerciseDiv = $('<div class="exercise-item"></div>');
        exerciseDiv.html(`<strong>${index + 1}. ${exercise.name}</strong> - ${exercise.type}`);
        exerciseListContainer.append(exerciseDiv);
    });
}

// Function to add a new exercise using jQuery
function addExercise() {
    const exerciseName = $('#exercise-name').val();
    const exerciseType = $('#exercise-type').val();

    // Validate input
    if (!exerciseName || !exerciseType) {
        alert('Please enter both exercise name and type.');
        return;
    }

    // Add the new exercise to the list
    const newExercise = { name: exerciseName, type: exerciseType };
    exercises.push(newExercise);

    // Display updated exercise list
    displayExercises();

    // Clear input fields using jQuery
    $('#exercise-name, #exercise-type').val('');
}

// Function to update user name using jQuery
function updateUserName() {
    const userNameInput = $('#user-name');
    const displayNameElement = $('#display-name');

    const newName = userNameInput.val().trim();

    if (newName !== "") {
        // Update the displayed name using jQuery
        displayNameElement.text(newName);
        // Clear the input field using jQuery
        userNameInput.val('');
    } else {
        alert("Please enter a valid name.");
    }
}

// Function to update user age using jQuery
function updateUserAge() {
    const userAgeInput = $('#user-age');
    const userAgeElement = $('#display-age');

    const newAge = userAgeInput.val().trim();

    if (newAge !== "") {
        // Update the displayed age using jQuery
        userAgeElement.text(newAge);
        // Clear the input field using jQuery
        userAgeInput.val('');
    } else {
        alert("Please enter a valid age.");
    }
}

// Function to update user weight using jQuery
function updateUserWeight() {
    const userWeightInput = $('#user-weight');
    const userWeightElement = $('#display-weight');

    const newWeight = userWeightInput.val().trim();

    if (newWeight !== "") {
        // Update the displayed weight using jQuery
        userWeightElement.text(newWeight + " kg");
        // Clear the input field using jQuery
        userWeightInput.val('');
    } else {
        alert("Please enter a valid weight.");
    }
}

// Call the displayExercises function when the page loads
$(document).ready(function() {
    displayExercises();
});

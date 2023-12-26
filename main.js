let exercises = [
    { name: 'Push-ups', type: 'Strength Training' },
    { name: 'Running', type: 'Cardio' },
    { name: 'Yoga', type: 'Flexibility' },
];

// Function to display exercises
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

// Function to add a new exercise
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

// Function to update user name
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

// Function to update user age
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

// Function to update user weight
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
$(function() {
    displayExercises();
});


function calculateCalories() {
    const userGender = $('#user-gender').val();
    const userAge = $('#user-age').val();
    const userWeight = $('#user-weight').val();
    const userHeight = $('#user-height').val();

    const baseCalories = (userGender === 'male') ? 88.362 + (13.397 * userWeight) + (4.799 * userHeight) - (5.677 * userAge) :
                                                 447.593 + (9.247 * userWeight) + (3.098 * userHeight) - (4.330 * userAge);

    const totalCalories = baseCalories * 1.55; 

    $('#calories-result').text(`Your estimated daily calories: ${Math.round(totalCalories)} kcal`);
}

function generateWorkoutPlan() {
    const workoutPlan = "Your personalized workout plan:\n1. Cardio - 30 minutes\n2. Strength training - 3 sets of 12 reps\n3. Stretching - 15 minutes";

    alert(workoutPlan);
}

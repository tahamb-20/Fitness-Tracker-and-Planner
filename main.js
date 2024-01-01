
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
document.addEventListener('DOMContentLoaded', function () {
    var exercises = [
        { name: 'Bench Press', type: 'chest' },
        { name: 'Deadlift', type: 'back' },
        { name: 'Squat', type: 'legs' },
        { name: 'Dumbbell Fly', type: 'chest' },
        { name: 'Lat Pulldown', type: 'back' },
        { name: 'Leg Press', type: 'legs' },
        { name: 'Shoulder Press', type: 'shoulders' },
        { name: 'Bicep Curl', type: 'arms' },
        { name: 'Tricep Dip', type: 'arms' },
        { name: 'Plank', type: 'core' },
        { name: 'Russian Twist', type: 'core' }
        
    ];
    const exerciseList = document.getElementById('exercise-list');
    const selectedExercises = [];

    function displayExercises(filteredExercises) {
        exerciseList.innerHTML = '';

        filteredExercises.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            exerciseItem.classList.add('exercise-item');
            exerciseItem.textContent = exercise.name;
            exerciseItem.onclick = function () {
                toggleSelectedExercise(exercise);
            };
            exerciseList.appendChild(exerciseItem);
        });
    }

    function filterExercises(type) {
        const filteredExercises = type === 'all' ? exercises : exercises.filter(exercise => exercise.type === type);
        displayExercises(filteredExercises);
    }

    function toggleSelectedExercise(exercise) {
        const index = selectedExercises.indexOf(exercise);
        if (index === -1) {
            selectedExercises.push(exercise);
        } else {
            selectedExercises.splice(index, 1);
        }
    }

    function addExercise() {

        console.log('Added exercises:', selectedExercises);
    }

    function removeExercise() {
        console.log('Removed exercises:', selectedExercises);
    }

    filterExercises('all');
    document.getElementById('exercise-filter').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const exerciseType = event.target.textContent.toLowerCase();
            filterExercises(exerciseType);
        }
    });
});
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
   
    function deleteExercise(button) {
        $(button).closest('.exercise-item').remove();
    }
    
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
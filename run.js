
let operation1 = document.getElementById("operation1");
let operation2 = document.getElementById("operation2");
let searchInput = document.getElementById("searchInput")
let searchBox = operation2.getElementsByClassName("searchBox")[0];
let br = document.createElement("br");



let countInfo = 0;
const numbers = [];
const names = [];
let indexOfNumbers = 0;
//if you click number
function show1()
{ 
    operation1.style.display = "block";
    operation2.style.display = "none";
    
}
//if you click search
function show2()
{
    operation1.style.display = "none";
    operation2.style.display = "block";
}

function submit(){
    //value of where you add the number
    var value1 = document.getElementById('nameField1').value;
    //value of the name that you give the number
    var value2 = document.getElementById('nameField2').value;
    
    numbers[countInfo] = value1;
    names[countInfo] = value2;
    document.getElementById('nameField1').value = '';
    document.getElementById('nameField2').value = '';
    countInfo += 1;

   
}

function displaySuggestions(suggestions) {
  searchBox.innerHTML = '';

  if (suggestions.length === 0) {
    hideSuggestions(); // Hide suggestions if there are none
    return;
  }

  suggestions.forEach(suggestion => {
    const li = document.createElement('li');//this one holds the numbers
    indexOfNumbers = numbers.indexOf(suggestion);// makes sure to give the corresponding position for the number and name to match
    li.textContent = suggestion;
    li.textContent += " " + names[indexOfNumbers];
    li.addEventListener('click', function() {
      searchInput.value = suggestion;
      hideSuggestions(); // Hide suggestions after selecting one
    });
    searchBox.appendChild(li);
  });
  showSuggestions(); // Show suggestions if there are any
  
  
}

// Function to show suggestions with fade-in effect
function showSuggestions() {
  searchBox.style.display = 'block'; // Make sure the list is visible
  setTimeout(() => {
    searchBox.style.opacity = 1; // Fade in
  }, 0); // No delay for fade in
}

// Function to hide suggestions with fade-out effect
function hideSuggestions() {
  searchBox.style.opacity = 0; // Fade out
  setTimeout(() => {
    searchBox.style.display = 'none'; // Hide after fade out
  }, 300); // Delay to match the transition duration
}

// Event listener for input field
searchInput.addEventListener('input', function() {
  if(!searchInput.value == ''){
    const userInput = searchInput.value.toLowerCase();
    const suggestions = numbers.filter(number => number.toLowerCase().includes(userInput));
    displaySuggestions(suggestions);
  }
  else{
    hideSuggestions();
  } 
});

// Event listener for clicks outside of input field and suggestions box
document.body.addEventListener('click', function(event) {
  if (!searchInput.contains(event.target) && !searchBox.contains(event.target)) {
    hideSuggestions(); // Hide suggestions when clicked outside of input field and suggestions list
  }
});


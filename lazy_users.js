const userContainer = document.getElementById("userContainer");
const loadMoreBtn = document.getElementById("loadMore");

let users = []; // All users from API
let currentIndex = 0; // Track how many users we've shown
const USERS_PER_PAGE = 3; // Load 3 at a time

// Fetch all users once
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data;
    loadNextUsers(); // Load the first 3
  });

// Function to load the next batch
function loadNextUsers() {
  const nextUsers = users.slice(currentIndex, currentIndex + USERS_PER_PAGE);

  nextUsers.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;
    userContainer.appendChild(card);
  });

  currentIndex += USERS_PER_PAGE;

  // If all users are shown, hide the button
  if (currentIndex >= users.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Button click loads more users
loadMoreBtn.addEventListener("click", loadNextUsers);

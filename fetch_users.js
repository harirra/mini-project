// Get the button and container from the HTML
const loadBtn = document.getElementById("loadUsers");
const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput"); // NEW LINE

// Add click event to the button
loadBtn.addEventListener("click", () => {
  // Fetch user data from API
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // Convert response to JSON
    .then(users => {
       // First, clear old cards if button is clicked again
      userContainer.innerHTML = "";


      // Loop through the list of users
      users.forEach(user => {
        // Create a new div for each user
        const card = document.createElement("div");
        card.className = "user-card"; // Add CSS class for styling

        // Fill the card with user details
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        // Add the card to the container
        userContainer.appendChild(card);
      });
    

      
      // 🔍 Add live search feature
      searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        document.querySelectorAll(".user-card").forEach(card => {
          const name = card.querySelector("h3").textContent.toLowerCase();

          // Show card only if name includes search text
          card.style.display = name.includes(searchText) ? "block" : "none";
        });
      });
    })

    .catch(error => {
      console.error("Something went wrong while fetching users:", error);
    });
});




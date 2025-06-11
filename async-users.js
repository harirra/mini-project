const loadBtn = document.getElementById("loadUsers");
const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

loadBtn.addEventListener("click", async () => {
  loader.style.display = "block"; // Show loading text
  error.style.display = "none";   // Hide error
  userContainer.innerHTML = "";   // Clear previous users

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      userContainer.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading users:", err);
    error.style.display = "block";
  } finally {
    loader.style.display = "none"; // Hide loading in all cases
  }
});


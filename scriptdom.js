const addUserBtn = document.getElementById("addUser");
const cardContainer = document.getElementById("cardContainer");

addUserBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.innerText = "👤 New User Card";
  card.style.border = "1px solid #000";
  card.style.margin = "10px";
  card.style.padding = "10px";
  cardContainer.appendChild(card);
});

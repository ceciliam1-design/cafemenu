const menuItems = ["Iced Lattes", "Espresso Shots", "Green Tea", "Hot Coffee", "Matcha", "Blueberry Muffin", "Chocolate Muffin", "Egg and Cheese Breakfast Sandwhich", "Cake Pops"];
const container = document.getElementById("menu-list"); 

menuItems.forEach(function(item) {
  const li = document.createElement('li');
  li.textContent = item;
  container.appendChild(li); 
}); 

const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});

function toggleMode() {
  document.body.classList.toggle("dark-mode");

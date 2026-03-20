const menuItems = ["Iced Lattes", "Espresso Shots", "Green Tea", "Hot Coffee", "Matcha", "Blueberry Muffin", "Chocolate Muffin", "Egg and Cheese Breakfast Sandwhich", "Cake Pops"];
const container = document.getElementById("menu-list"); 

const list = document.createElement('ul');
menuItems.forEach(function(item) {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});
container.appendChild(list);

const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});

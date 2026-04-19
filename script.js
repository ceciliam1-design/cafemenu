const menuItems = ["Iced Lattes", "Espresso Shots", "Green Tea", "Hot Coffee", "Matcha", "Blueberry Muffin", "Chocolate Muffin", "Egg and Cheese Breakfast Sandwhich", "Cake Pops"];
const container = document.getElementById("menu-list"); 

menuItems.forEach(function(item) {
  const li = document.createElement('li');
  li.textContent = item;
  container.appendChild(li); 

  items.forEach(item => {
  let li = document.createElement('li');
  li.textContent = item;
  menuList.appendChild(li);
}); 
const menuItems = [
    "Espresso - $3.00",
    "Cafe Latte - $4.50",
    "Chocolate Croissant - $3.75",
    "Green Tea - $3.25"
];

const listContainer = document.getElementById('menu-list');

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listContainer.appendChild(li);
});

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('show-special').addEventListener('click', () => {
    const specialText = document.getElementById('daily-special');
    specialText.textContent = "Today's Special: Caramel Macchiato & Lemon Cake!";
});
const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

function toggleMode() {
  document.body.classList.toggle("dark-mode");

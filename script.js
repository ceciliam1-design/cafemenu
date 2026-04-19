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
Iced Lattes - $4.50
Hot Coffee - $4.25
Tea: Green, Chai, Black, Lavender - $3.50
Iced Matcha - $4.50
Cake Pops: Strawberry, Oreo, Vanilla - $2.50
Blueberry, Chocolate, and Rasberry Lemon Muffin - $3.00
Egg and Cheese BreakFast Sandwhich - $5.00
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

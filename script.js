const menuItems = ["Iced Lattes", "Espresso Shots", "Green Tea", "Hot Coffee", "Matcha", "Blueberry Muffin", "Chocolate Muffin", "Egg and Cheese Breakfast Sandwhich", "Cake Pops"];

const menuList = document.getElementById("menu-list");

menuItems.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

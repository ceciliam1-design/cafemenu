const menuItems = ["Iced Lattes", "Espresso Shots", "Green Tea", "Blueberry Muffin", "Hot Coffee", "Matcha"];

const menuList = document.getElementById("menu-list");

menuItems.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

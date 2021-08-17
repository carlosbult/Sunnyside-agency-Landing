const hamburguer = document.getElementById("hamburguer");
const menuList = document.getElementById("menu__list");

hamburguer.addEventListener("click", (e) => {
  menuList.classList.toggle("menu__list");
});

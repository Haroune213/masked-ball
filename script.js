var start_button = document.getElementById("start-button");
var return_betton = document.getElementById("return-button");
var main_menu = document.getElementById("main-menu");
var game_screen = document.getElementById("jeu");

start_button.addEventListener("click", (e) => {
  e.preventDefault();
  main_menu.style.visibility = "hidden";
  game_screen.style.visibility = "visible";
});

return_button.addEventListener("click", (e) => {
  e.preventDefault();
  main_menu.style.visibility = "visible";
  game_screen.style.visibility = "hidden";
});
3;

function game_init() {}

function game_loop() {}

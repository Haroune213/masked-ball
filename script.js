var return_button = document.getElementById("return-button");
var game_screen = document.getElementById("jeu");
var game_mode = 0;
var bot_number;
var turn = 1;
var main_menu, title, buttonWrapper, singleplayer_mode, online_mode,start_button ;
var game_screen,return_button,table,card_1,card_2,card_3,card_4,card_5,card_list,player_card_1,player_card_2,player_card_3, player_card_4;

function generateGame(){};
function generateMenu(){};
function game_init(){};
function game_loop(){};

class player {
  constructor(name, id, role, bot, turn) {
      this.name = name;
      this.id = id;
      this.role = role;
      this.bot = bot;
      this.turn= turn;
      this.cards = [];
  }}

function generateMenu(){
main_menu = document.createElement("div");
main_menu.id = "main-menu";
title = document.createElement("h3");
title.textContent = "Game Type";
buttonWrapper = document.createElement("div");
buttonWrapper.id = "button-wrapper";
singleplayer_mode = document.createElement("div");
singleplayer_mode.id = "singleplayer";
singleplayer_mode.classList.add("menu-gametype", "play_mode_active");
singleplayer_mode.textContent = "Singleplayer";
online_mode = document.createElement("div");
online_mode.id = "online";
online_mode.classList.add("menu-gametype");
online_mode.textContent = "Online";
start_button = document.createElement("div");
start_button.id = "start_button";
start_button.textContent = "Commencer la partie";
buttonWrapper.appendChild(singleplayer_mode);
buttonWrapper.appendChild(online_mode);
main_menu.appendChild(title);
main_menu.appendChild(buttonWrapper);
main_menu.appendChild(start_button);
document.getElementById("main-header").appendChild(main_menu);

start_button.addEventListener("click", (e) => {
  main_menu.remove();
  generateGame();
  game_init();
})
}

function generateGame(){
  game_screen = document.createElement("div");
  game_screen.id = "game_screen";
  
  // RETURN BUTTON
  return_button = document.createElement("div");
  return_button.id = "return_button";
  return_button.textContent = "Quitter";
  
  // TABLE
  table = document.createElement("div");
  table.id = "table";
  
  // TABLE CARDS
  card_1 = document.createElement("div");
  card_1.id = "card_1";
  card_1.classList.add("table-cards");
  card_1.textContent = "lol";
  
  card_2 = document.createElement("div");
  card_2.id = "card_2";
  card_2.classList.add("table-cards");
  card_2.textContent = "salut";
  
  card_3 = document.createElement("div");
  card_3.id = "card_3";
  card_3.classList.add("table-cards");
  card_3.textContent = "yo";
  
  card_4 = document.createElement("div");
  card_4.id = "card_4";
  card_4.classList.add("table-cards");
  card_4.textContent = "brrsss";
  
  card_5 = document.createElement("div");
  card_5.id = "card_5";
  card_5.classList.add("table-cards");
  
  // CARD LIST
  card_list = document.createElement("div");
  card_list.id = "card_list";
  
  // PLAYER CARDS
  player_card_1 = document.createElement("div");
  player_card_1.classList.add("cards");
  
  player_card_2 = document.createElement("div");
  player_card_2.classList.add("cards");
  
  player_card_3 = document.createElement("div");
  player_card_3.classList.add("cards");
  
  player_card_4 = document.createElement("div");
  player_card_4.classList.add("cards");

  table.appendChild(card_1);
table.appendChild(card_2);
table.appendChild(card_3);
table.appendChild(card_4);
table.appendChild(card_5);

card_list.appendChild(player_card_1);
card_list.appendChild(player_card_2);
card_list.appendChild(player_card_3);
card_list.appendChild(player_card_4);

game_screen.appendChild(return_button);
game_screen.appendChild(table);
game_screen.appendChild(card_list);
document.getElementById("main-header").appendChild(game_screen); // show
return_button.addEventListener("click", (e) => {
  generateMenu();
  game_screen.remove();

});
}

generateMenu();

singleplayer_mode.addEventListener("click",(e)=>{
  if(game_mode!=0){
    singleplayer_mode.classList.add("play_mode_active");
    online_mode.classList.remove("play_mode_active");
    game_mode=0;  btn.addEventListener("click", () => {
      singleplayer.classList.remove("play_mode_active");
      online.classList.remove("play_mode_active");
      btn.classList.add("play_mode_active");
    });
  }
})

online_mode.addEventListener("click",(e)=>{
  if(game_mode!=1){
    singleplayer_mode.classList.remove("play_mode_active");
    online_mode.classList.add("play_mode_active");
    game_mode=1;
  }
})





function game_init() { // --------------- ASMA----------------
   var players=[];
    
    const imposterId = Math.floor(Math.random() * 5)+1;
    
    currentId = 1; // current id being read (for choosing imposter !!)

    for (let i = 0; i < 5; i++) { // initialize real players
        const role = (currentId == imposterId) ? "imposter" : "normal";
        players[i] = new player("player #"+currentId , currentId, role, false);
        
        console.log(player.name + " is " + player.role); // output role of each player
        currentId++; // increment for next player
    }

    for (let i = 1; i <= 4; i++) { // initialize bots
      const role = (currentId === imposterId) ? "imposter" : "normal";
      const bot = new player("bot #" + 1 , currentId, role, true);
      
      console.log(bot.name + " is " + bot.role);
      currentId++; // increment for next bot
  }       // --------------- ASMA---------------- end

    selectTheme(); 
}                      

function game_loop(){
   
    // 2- player place card
    // 3- turn changes (++)
    // 4- vote (vote/abstain)
    // 5- 
    
  while (turn <= 5) {  // ARRANGER ICI LA LOOP WTV
    var round = 1;

    if (player.bot = false) { // real player
      distributeCards();
      pickCard(choice); // either select a card or skip turn, with input choice.
    }
    else if (player.bot = true) {           // Bots actions
      //add decision algorithm

    } 
    turn ++;

    if(turn = 6) 
      { turn = 0}
      
    turn++;
    }
}

// Randomly selects a theme for the game
function selectTheme(){ 

var gameTheme = themes[Math.floor(Math.random() * themes.length)];
return gameTheme;
}


const theme1 = {
  themeName: "Fruit",
  relatedWords: ["Apple", "orange", "banana", "kiwi", "mango", "cherry", "eat", "blueberry", "dessert"],
  isSelected: false
};

const theme2 = {
  themeName: "Nature",
  relatedWords: ["Tree", "Flower", "River", "Sky", "Desert", "Hill", "Field", "Bush", "Animal"],
  isSelected: false
};

const theme3 = {
  themeName: "Colors",
  relatedWords: ["Red", "Orange", "Rainbow", "Green", "Yellow", "Purple", "Blue", "Black", "White"],
  isSelected: false
};

const themes = [theme1, theme2, theme3];

function distributeCards(player) {
    const allWords = themes.flatMap(themes => themes.relatedWords);             // merge all cards in one array

    player.cards = [];

    while (player.cards.lenght < 3) {       // to avoid duplicate cards in same player deck
        const random_card = allWords [Math.floor(Math.random() * allWords.length)]; // chooses a random card
        
        if (!player.cards.includes(random_card)) {
            player.cards.push(random_card);
        }
    }
}

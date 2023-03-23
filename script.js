const button = document.getElementsByClassName('popup');
function Jeux(titre, console, annee) {
    this.titre =titre;
    this.console = console;
    this.annee = annee;
}

let jeu1 = new Jeux('Super Mario Bros.', 'PSP3', 1985);
let jeu2 = new Jeux('Super Mario Bros: The Lost Levels', 'PSP', 1986);
let jeu3 = new Jeux('Super Mario Bros. 2', 'PSP3', 1987);
let jeu4 = new Jeux('Super Mario Bros. 3', 'PSP4', 1988);
let jeu5 = new Jeux('Super Mario World .', 'Game Boy', 1990);
let jeu6 = new Jeux('Super Mario All-Stars.', 'PS4', 1993);
let jeu7 = new Jeux('Super Mario World 2: Yoshi\'s Island.', 'Super Nintendo', 1995);
let jeu8 = new Jeux('Super Mario 64.', 'Nintendo', 1996);
let jeu9 = new Jeux('Super Mario Sunshine.', 'GameCube', 2002);
let jeu10 = new Jeux('Super Mario Bros. Deluxe.', 'Game Boy Color', 1999);

let myCollection = new Object();
myCollection = {...{jeu1}, ...{jeu2}, ...{jeu3}, ...{jeu4}, ...{jeu5}, ...{jeu6}, ...{jeu7}, ...{jeu8}, ...{jeu9}, ...{jeu10}} 
 
const results = document.querySelector('body')
results.innerHTML = Object.values(myCollection).map((jeu,index)=>`

<div class="card">
        <h2>Titre : ${jeu.titre}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.annee}</h4>
        <button id='${"jeu"+(index+1)}' class='popup'>OPEN</button>
        </div>
  `)        
.join("");
for(index=0; index<button.length ;index++){
    let cle = button[index].id;
   console.log(cle);
   button[index].addEventListener('click',(el)=>{

    console.log(myCollection[cle].titre);
   })
} 


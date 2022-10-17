'use strict';
/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

//ROCEDIMENTO
/* 


     

*/

const playButton = document.getElementById('play-button');

function play(){

    let numBox;
    const contenitoreMain = document.getElementById('contenitore-main');
    contenitoreMain.innerHTML = '';
    const livelliDifficoltaHTML = document.getElementById('livelli-difficolta');
    const livelli = livelliDifficoltaHTML.value;

    // CREO SWITCH PER CAMBIARE N BOX AL CAMBIO DIFFICOLTA'
    switch(livelli){
        case '1':
            default:
            numBox = 100;
            break;

        case '2':
             numBox = 81;
            break;

        case '3':
            numBox = 49;
            break;
    } 

      //CREO FUNZIONE PER CREARE DIV FIELD GAME CHE CONTERRA' I DIV BOXES
    function creaGriglia(){
        
        const griglia = document.createElement('div');
        griglia.className = 'field-game';
        
        for(let i = 1; i <= numBox; i++){
            const square = creaBox(i);
            griglia.append(square);
         }
         contenitoreMain.append(griglia);
         
    }

    //CREO FUNZIONE PER CREARE BOX DA INSERIRE DENTRO IL FIELD
    function creaBox(num){
        const box = document.createElement('div');
        box.className = 'boxes'; 
        const spaceLevel = Math.sqrt(numBox);
        box.style.width = `calc(100% / ${spaceLevel})`;
        box.style.height = `calc(100% / ${spaceLevel})`;
        box.innerHTML = `
        <span> ${num}</span>
        `;   

        //AGGIUNGO EVENTO CLICK PER CAMBIARE BG COLOR AGGIUNGENDO CLASSI CSS
        box.addEventListener('click', function(){
            box.classList.add('bg-blu');
        })
         return box;  
    }
 
    creaGriglia();
    
}

playButton.addEventListener('click', play);
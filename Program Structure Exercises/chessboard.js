console.log('Chessboard');

let size = 7;
let grid = '';

for(let counter = 0; counter < size; counter++){
    grid += " #";
}

for(let counter = 0; counter < size; counter++){
    console.log(grid);
}


/* WRITER ANSWER

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);


ELE CHECA SE A SOMA DOS DOIS É PAR PARA DECIDIR SE É UM ESPAÇO OU GRID E DEPOIS 
ADICIONA TUDO A MESMA STRING. AO FIM DO SEGUNDO FOR ANINHADO, 
ELE ADICIONA UMA QUEBRA DE LINHA (POIS O SEGUNDO FOR REGULA AS LINHAS DO GRADIENTE).
*/
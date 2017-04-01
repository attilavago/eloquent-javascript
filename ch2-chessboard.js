// chessboard

var size = 8;
var column = '';
var line = 0;

for(var i=0; i<size; i++){
    line = line + 1;
    if(line < size+1 && line%2 == 0){
        for(var j=0; j<size; j++){
            if(j%2 == 0){
                column = column + '#';
            } else {
                column = column + '0';
            }
        }
        column = column + '\n';
    } else {
       for(var j=0; j<size; j++){
            if(j%2 == 0){
                column = column + '0';
            } else {
                column = column + '#';
            }
        }
        column = column + '\n'; 
    }
}


console.log(column);
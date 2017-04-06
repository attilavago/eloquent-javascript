// bean counting function 

function countBs(string){
    var beans = 0;
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) == 'B'){
            beans++;
        }
    }
    return beans;
}

function countChar(string, char){
    var beans = 0;
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) == char){
            beans++
        }
    }
    return beans;
}

countChar('BAbbBBB', 'B');
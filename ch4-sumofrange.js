// sum of range without step
/*
function range(start, end){
    var theArr = [];
	    for(let i = start; i <= end; i++){
    	    theArr.push(i);
        }
    return theArr;
}
*/
// sum of range with step

function range(start, end, step){
    var theArr = [];
    if(step === undefined){
        for(let i = start; i <= end; i++){
    	    theArr.push(i);
        }
        return theArr;
    } else if(step > 0){
        for(let i = start; i <= end; i = i + step){
    	    theArr.push(i);
        }
        return theArr;
    } else if(step < 0){
        for(let i = start; i >= end; i = i + step){
    	    theArr.push(i);
        }
        return theArr;
    }
}

// sum of array

function sum(numbers){
    var theSum = 0;
        for(let i = 0; i <= numbers.length; i++){
            theSum = theSum + i;
        }
    return theSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
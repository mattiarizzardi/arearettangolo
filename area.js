function getArea(arr) {
    //if(!arr) throw 'errore';

    //check of interger end equal or greater than zero 
    if((Number.isInteger(arr[0]) && arr[0] >= 0) &&
        (Number.isInteger(arr[0]) && arr[1] >= 0)){
        return (arr[0] * arr[1]);

    }

    else{
        return -1; //in the other cases -1
    }

}

module.exports = getArea;

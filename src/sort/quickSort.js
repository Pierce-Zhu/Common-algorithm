const quickSort = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }
    let numIndex = parseInt(arr.length/2);
    let numTemp = arr.splice(numIndex, 1)[0];
    let arrLeft = [];
    let arrRight = [];
    for (let elem of arr) {
        if(elem < numTemp) {
            arrLeft.push(elem);
        } else {
            arrRight.push(elem);
        }
    }
    return quickSort(arrLeft).concat(numTemp, quickSort(arrRight));
}
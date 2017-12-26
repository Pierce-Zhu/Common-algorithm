//快速排序
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

// 稳定：否
// 时间复杂度
// 最优：O(nlog(n))
// 最差：O(n^2)
// 平均：O(nlog(n))
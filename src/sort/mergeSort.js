//归并排序
var arr=[-11,17,12,19,0,-222];
    function mergeSort(arr,s,e){
        if(s>e){   //起始位置大于终点位置，返回空数组
            return [];
        }else if(s==e){
            return [arr[s]]; //起始位置等于终点位置，说明数组里只有一个数字，返回只含一个数字的数组    
        }

        var mIndex = Math.floor((s+e)/2); //中间位置的Index
        var arrL = mergeSort(arr,s,mIndex); //将左边的数组排序
        var arrR = mergeSort(arr,mIndex+1,e); //将右边的数组排序

        var resultArr = []; //结果数组
        while(arrL.length>0 || arrR.length>0){ //当左右两个数组都不为空时
            if(arrL[0]<arrR[0]){
                resultArr.push(arrL.shift());
            }else{
                resultArr.push(arrR.shift());
            }

            if(arrL.length==0){  //当左边的数组为空时
                resultArr = resultArr.concat(arrR);
                break;
            }else if(arrR.length==0){
                resultArr = resultArr.concat(arrL);
                break;
            }
        }
        return resultArr;
    }

 document.write(mergeSort(arr,0,arr.length-1));
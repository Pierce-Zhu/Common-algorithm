// 堆排序：（不适用于纪录数较少的文件）

//  堆排序算法的过程如下:
// 1)得到当前序列的最小(大)的元素
// 2)把这个元素和最后一个元素进行交换,这样当前的最小(大)的元素就放在了序列的最后,而原先的最后一个元素放到了序列的最前面
// 3)交换可能会破坏堆序列的性质(注意此时的序列是除去已经放在最后面的元素),因此需要对序列进行调整,使之满足于上面堆的性质.
// 重复上面的过程,直到序列调整完毕为止.
// js实现：


/**
* 堆排序
* @param items 数组
* @return 排序后的数组
*/
   function heapSort(items)
   {
   items = array2heap(items); //将数组转化为堆
   for(var i = items.length - 1; i >= 0; i--)
   {
      items = swap(items, 0, i); //将根和位置i的数据交换(用于将最大值放在最后面)
      items = moveDown(items, 0, i - 1); //数据交换后恢复堆的属性
   }
   return items;
   }

/**
* 将数组转换为堆
* @param items 数组
* @return 堆
*/
   function array2heap(items)
   {
   for(var i = Math.ceil(items.length / 2) - 1; i >= 0; i--)
   {
      items = moveDown(items, i, items.length - 1); //转换为堆属性
   }
   return items;
   }

/**
* 转换为堆
* @param items 数组
* @param first 第一个元素
* @param last 最后一个元素
* @return 堆
*/
   function moveDown(items, first, last)
   {
   var largest = 2 * first + 1;
   while(largest <= last)
   {
      if(largest < last && items[largest] < items[largest + 1])
      {
             largest++;
      }
      if(items[first] < items[largest])
      {
             items = swap(items, first, largest); // 交换数据
             first = largest;   //往下移
             largest = 2 * first + 1;
      }
      else
      {
             largest = last + 1; //跳出循环
      }
   }
   return items;
   }

/**
* 交换数据
* @param items 数组
* @param index1 索引1
* @param index2 索引2
* @return 数据交换后的数组
*/
   function swap(items, index1, index2)
   {
   var tmp = items[index1];
   items[index1] = items[index2];
   items[index2] = tmp;
   return items;
   }
//    var a = [345,44,6,454,10,154,3,12,11,4,78,9,0,47,88,9453,4,65,1,5];
//    document.write(heapSort(a));
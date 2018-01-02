//实现千位符
//方法一：
function format(num){  
    num=num+'';//数字转字符串  
    var str="";//字符串累加  
    for(var i=num.length- 1,j=1;i>=0;i--,j++){  
        if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况  
            str+=num[i]+",";//加千分位逗号  
            continue;  
        }  
        str+=num[i];//倒着累加数字  
    }  
    return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串  
} 


//方法二
function format (num) {  
    var reg=/\d{1,3}(?=(\d{3})+$)/g;   
    return (num + '').replace(reg, '$&,');  // $& 表示与正则表达式相匹配的内容，具体的使用可以查看字符串replace()方法的
}


 // 方法三
 function currency(num, dot) { //格式化货币 000,000,000方式显示
    if (dot === 0) {
        num = Number(num).toFixed(0);
    } else {
        dot = dot || 2;
        num=''+num;
        if(num.indexOf(".")>0 && num.length>num.indexOf(".")+dot){
            num=num.substring(0,num.indexOf(".")+dot+1);
        }else{
            num = Number(num).toFixed(dot);
        }
    }
    var n = '' + num;
    var r = n.replace(/(^|-|\s)\d+(?=\.?\d*($|\s))/g, function(m) {
        return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
    });
    if (dot === 0) {
        return r;
    } else {
        var i = r.indexOf('.');
        if (i >= 0) return r.substring(0, i + 1 + dot);
        else {
            r += '.';
            for (var i = dot; i > 0; dot--) {
                r += '0';
            };
            return r;
        }
    }
}

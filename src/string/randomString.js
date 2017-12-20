//生成指定长度的随机字符串
function randomString(n){
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var tmp = '';
    for(var i=0; i<n; i++) {
        //charAt返回指定索引位置的char值
        tmp += str.charAt(Math.round(Math.random()*str.length));
    }
    return tmp;
}
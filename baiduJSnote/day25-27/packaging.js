// 在页面中显示当前日期及时间，按秒更新
// 格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss

//如果想要实现阿拉伯数字转换为中文数字，就需要封装一个函数

function addZero(a){
    if(a < 10){
        a = "0" + a;
    }
    return a;
}

function startTime(){
    var dateTxt = document.getElementById("date");
    let today = new Date();
    let Y = today.getFullYear(),
     M = today.getMonth() + 1,
     DD = today.getDate(),
     D = today.getDay(),
     H = today.getHours(),
     m = today.getHours(),
     s = today.getSeconds();
     dateTxt.innerHTML =
         Y +"年" + M + "月" + DD + "日" +   "星期" + D + " " + H + ":" + m + ":" +s;
    YYYY=setTimeout('startTime()',500)
}
startTime();




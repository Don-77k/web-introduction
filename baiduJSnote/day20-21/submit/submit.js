//当点击按钮 submit-btn 时，在console中输出 name 中的内容
// 在输入过程中，如果按回车键，则同样执行上一条的需求
// 在输入过程中，如果按 ESC 键，则把输入框中的内容清空

//创建一个点击事件
var btn = document.getElementById('submit-btn');
var int = document.getElementById("name");
btn.onclick = function(){
  console.log(int.value);
}
document.onkeydown = function(){
  //这里最好在整个window对象中查找event属性，否则有可能查找出错
  //event =event  ｜｜window.event
  if(event.keyCode == 13){
    console.log(int.value);
  }else if(event.keyCode == 27){
    int.value = "";
  }
}
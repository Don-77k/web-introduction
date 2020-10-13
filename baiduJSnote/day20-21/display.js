// 当用户选择了 School 的单选框时，显示 School 的下拉选项，隐藏 Company 的下拉选项
// 当用户选择了 School 的单选框时，显示 Company 的下拉选项，隐藏 School 的下拉选项
document.getElementById("school").onclick = function(){
    document.getElementById("school-select").className = "select";
    document.getElementById("company-select").className = "no-select"
}
document.getElementById("company").onclick = function(){
    document.getElementById("school-select").className = "no-select";
    document.getElementById("company-select").className = "select"
}
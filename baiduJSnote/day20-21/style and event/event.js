 
//当点击某一个li标签，将li的背景色显示在p标签内
//并将 P 标签中的文字颜色设置成 Li 的背景色
let list = document.querySelectorAll("li");
for(let i=0, len =list.length; i<len; i++){
	list[i].onclick = function(){
	//将li的背景颜色的文字显示到p标签当中
	//利用target实践也可以实现
	// let t = e.target;
	// let c = t.style.backgroundColor;
		let p = document.getElementsByClassName("color-picker")[0]
			p.innerHTML = this.style.backgroundColor;
			p.style.color = this.style.backgroundColor;
	}


}

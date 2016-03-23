window.onload=function(){
	var oLi=document.getElementsByTagName('li');
	var contaniner=document.getElementById('container');
	document.getElementById('right-in').onclick=function(){
		var pl=document.createElement('li');
		if(!isNaN(document.getElementById('input').value)){
			pl.innerHTML=document.getElementById('input').value;
			container.appendChild(pl);
		}
		else{
			alert("输入不合法，请重新输入");
		}
	};

    document.getElementById('left-in').onclick=function(){
		var pl=document.createElement('li');
        if(!isNaN(document.getElementById('input').value)){
			pl.innerHTML=document.getElementById('input').value;
			container.insertBefore(pl,oLi[0]);
		}
		else{
			alert("输入不合法，请重新输入");
		}
	};
	
	document.getElementById('left-out').onclick=function(){
		alert(oLi[0].innerHTML);
		container.removeChild(oLi[0]);
	};
	
	document.getElementById('right-out').onclick=function(){
		alert(oLi[oLi.length-1].innerHTML);
		container.removeChild(oLi[oLi.length-1]);
	};
	
	document.getElementById('right-out').onclick=function(){
		alert(oLi[oLi.length-1].innerHTML);
		container.removeChild(oLi[oLi.length-1]);
	};
	container.onmouseover=function(){
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			container.removeChild(container.childNodes[this.index]);

		}
	}
	}
}
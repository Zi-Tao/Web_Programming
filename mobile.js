window.onload = function(){
	var getNav = document.getElementById('float-nav');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNav.parentNode.insertBefore(mobile,getNav);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNav.getAttribute('style');
		if(a){
			getNav.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(mobile-menu.png)';
		} else {
			getNav.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(mobile-close.png)';
		}
	};
	// var getElm = getNav.getElementsByTagName("LI");
	// for(var i=0;i<getElm.length;i++){
	// 	if(getElm[i].children.length>1){
	// 		var smenu = document.createElement("span");
	// 		smenu.setAttribute("class","mobile-submenu");
	// 		smenu.setAttribute("OnClick","submenu("+i+")");
	// 		getElm[i].appendChild(smenu);
	// 	};
	// };
	// submenu = function (i){
	// 	var sub = getElm[i].children[1];
	// 	var b = sub.getAttribute('style');
	// 	if(b){
	// 		sub.removeAttribute('style');
	// 		getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
	// 		getElm[i].lastChild.style.backgroundColor='rgba(98, 0, 49, 0.91)';
	// 	} else {
	// 		sub.style.display='block';
	// 		getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
	// 		getElm[i].lastChild.style.backgroundColor='rgba(0, 0, 0, 0.91)';
	// 	}
	// };
};

$(function() {
	//Ajax请求丢失或捡到列表显示
	$(".body_type").change(function() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("sj_temp_lost").innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET", "SjTempLost.php?q=" + $(this).val(), true);
		xmlhttp.send();

	});
	//滚动条高度触发事件
	$(window).scroll(function(e){
		if ($(document).scrollTop()>800) {
 		}
		if ($(document).scrollTop()>800) {
 		}
		if ($(document).scrollTop()>800) {
 		}
		if ($(document).scrollTop()>800) {
 		}
	});
	//校区悬停选择事件
	$(".dqxq").hover(function(e){
		$(".span").css("display","block");
		$(".span").fadeOut(3000);
	});
//	//发布信息页面动画
//	$(".img4").addClass("img4Animate");
//	$(".img1").addClass("img1Animate");

});


//		//获取Location对象的search属性值.即参数。
//	var searchStr=location.search;
//	//由于searchStr属性值包括“？”，所以除去该字符。
//	searchStr=searchStr.substr(1);
//	//将字符串分割成数组，数组中的每一个元素为一个参数和参数值，返回searchs数组。
//	var searchs=searchStr.split("&");
//	//获取第一个参数和参数值，返回$type数组；
//	var $typeAll=searchs[0].split("=");
//	//获取$typeAll数组的第二个值
//	var $type=$typeAll[1];
//	//获取第二个参数和参数值，返回ucord数组；
//	var $nameAll=searchs[1].split("=");
//	//获取$nameAll数组的第二个值
//	var $name=$nameAll[1];
//	//创建节点
//	var $content = $("<div>"+$type+$name+"</div>");
//	//将节点添加到页面中
//	$(".sj_title_lost").append($content);
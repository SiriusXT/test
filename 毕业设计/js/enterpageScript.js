$(function(){
	
	$(".title").fadeIn(2000,function(){
		
		$(".small").addClass("small-Animate");
		
	});
	
	//明水
	$(".msbox1").click(function(e){
		
		$(".fourcampus-ms").css("display","block");
		$(".ms1").fadeIn(1000);
		$(".ms2").fadeIn(1500);
		$(".ms3").fadeIn(2000);
		$(".ms4").fadeIn(2500);
		$(".ms5").fadeIn(2500);
		$(".ms6").fadeIn(2500);
		$(".ms7").fadeIn(2000);
		$(".ms8").fadeIn(1500);
		$(".ms9").fadeIn(1000);
		$(".ms10").fadeIn(1000);
		$(".ms11").fadeIn(1500);
		$(".ms12").fadeIn(2000);
		$(".ms13").fadeIn(2500);
		
	});
	
	//圣井
	$(".sjbox1").click(function(e){
		
		$(".fourcampus-sj").css("display","block");
		$(".sj1").fadeIn(2500);
		$(".sj2").fadeIn(2000);
		$(".sj3").fadeIn(2000);
		$(".sj4").fadeIn(2500);
		$(".sj5").fadeIn(1000);
		$(".sj6").fadeIn(1500);
		$(".sj7").fadeIn(2000);
		$(".sj8").fadeIn(1500);
		$(".sj9").fadeIn(1000);
		$(".sj10").fadeIn(2500);
		$(".sj11").fadeIn(2000);
		$(".sj12").fadeIn(2000);
		$(".sj13").fadeIn(2500);
		
	});
	
	//燕山
	$(".ysbox1").click(function(e){
		
		$(".fourcampus-ys").css("display","block");
		$(".ys1").fadeIn(1000);
		$(".ys2").fadeIn(1500);
		$(".ys3").fadeIn(2000);
		$(".ys4").fadeIn(2500);
		$(".ys5").fadeIn(1000);
		$(".ys6").fadeIn(1500);
		$(".ys7").fadeIn(2000);
		$(".ys8").fadeIn(2500);
		$(".ys9").fadeIn(3000);
		$(".ys10").fadeIn(1500);
		$(".ys11").fadeIn(2000);
		$(".ys12").fadeIn(2500);
		$(".ys13").fadeIn(3000);
		
	});
	
	//舜耕
	$(".sgbox1").click(function(e){
		
		$(".fourcampus-sg").css("display","block");
		$(".sg1").fadeIn(2500);
		$(".sg2").fadeIn(2000);
		$(".sg3").fadeIn(2000);
		$(".sg4").fadeIn(2500);
		$(".sg5").fadeIn(1000);
		$(".sg6").fadeIn(1000);
		$(".sg7").fadeIn(1500);
		$(".sg8").fadeIn(1000);
		$(".sg9").fadeIn(1000);
		$(".sg10").fadeIn(2500);
		$(".sg11").fadeIn(2000);
		$(".sg12").fadeIn(2000);
		$(".sg13").fadeIn(2500);
		
	});
	
	
	$(".close").click(function(e){
		
//		$(".fourcampus").css("display","none");
		$(".fourcampus-ms img").fadeOut(2000);
		$(".fourcampus-ms").fadeOut(2000);
		
	});
	
	$(".close-sj").click(function(e){
		
//		$(".fourcampus").css("display","none");
		$(".fourcampus-sj img").fadeOut(2000);
		$(".fourcampus-sj").fadeOut(2000);
		
	});
	
	$(".close-ys").click(function(e){
		
//		$(".fourcampus").css("display","none");
		$(".fourcampus-ys img").fadeOut(2000);
		$(".fourcampus-ys").fadeOut(2000);
		
	});
	
	$(".close-sg").click(function(e){
		
//		$(".fourcampus").css("display","none");
		$(".fourcampus-sg img").fadeOut(2000);
		$(".fourcampus-sg").fadeOut(2000);
		
	});
	
	
});

$(function() {
	var radio=($(".fourImg").width())/511;
	var coords0=100*radio+","+242*radio+","+100*radio;
	var coords1=256*radio+","+100*radio+","+100*radio;
	var coords2=411*radio+","+242*radio+","+100*radio;
	var coords3=256*radio+","+384*radio+","+100*radio;
	$("map area").eq(0).attr("coords",coords0)
	$("map area").eq(1).attr("coords",coords1)
	$("map area").eq(2).attr("coords",coords2)
	$("map area").eq(3).attr("coords",coords3)
	var wHeight=$(window).height();
	$(".img_big").css("height",wHeight);
	$(".img_cur").hide();
	$(".imgBox").click(function(){
		var getUrl=$(this).attr("src");
		$(".img_cur img").attr("src",getUrl);
		$(".mask").show();
		$(".img_cur").show();
		$("html").css("overflow","hidden");
	});
	$(".imgBBox").click(function(){
		var getUrlNum=$(this).attr("alt");
		var getUrl="img/b"+getUrlNum+".png";
		$(".img_cur img").attr("src",getUrl);
		$(".mask").show();
		$(".img_cur").show();
		$("html").css("overflow","hidden");
	});
	$(".imgC").click(function(){
		$(".get_img img").attr("src","");
		var getUrl=$(this).attr("src");
		var getImg=getUrl.substr(getUrl.length-7,3);
		var realUrl="img/big"+getImg+".jpg";
		$(".get_img img").attr("src",realUrl);
		$(".mask").show();
		$(".img_cur").show();
		$("html").css("overflow","hidden");
	});
	$(".get_img").click(function(){
		$(".img_cur").hide();
		$(".mask").hide();
		$("html").css("overflow","scroll")
	});
});
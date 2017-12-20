$(function() {
	var wHeight=$(window).height();
	$(".img_big").css("height",wHeight);
	$(".img_cur").hide();
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
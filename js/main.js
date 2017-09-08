$(function(){

	$(window).resize();

	//平滑滚动导航
	$('#fstPage-down a, nav a, #logo, .linkAboutMe').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-$("#nav").outerHeight()}, 600);
		event.preventDefault();
	});

	$("#nav").navFixed();
});

$(window).resize(function(){ 
	$("#firstPage").css("height", $(window).height());
	$("#wantMore").css("height", $(window).outerHeight()-rmpx($("#wantMore").css("padding-top"))-rmpx($("#wantMore").css("padding-bottom"))-52+"px");

	$('#firstPage>p').stop().fadeIn("normal").animate({"top":($(window).height()-$('#firstPage>p').outerHeight())/2},500); 
	$('#wantMore>p').css({"top":($(window).height()-$('#wantMore>p').outerHeight())/2});
}); 

function rmpx(str){
	var num;
	num = parseInt(str.substring(0, str.length-2));
	return num;
}
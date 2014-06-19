resizeDiv();

$("img").on("click", scroll);


/******************************************
/* Functions                   
/*******************************************/
function scroll(){
	$.scrollTo(".page.2",400);				
}

function resizeDiv() {
	vph = $(window).height();
	$(".page").css({"height": vph + "px"});
}